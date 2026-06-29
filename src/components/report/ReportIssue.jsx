import { useState } from "react"
import Header from "../layout/Header"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

import { PhotoUpload } from "./PhotoUpload"
import { LocationInput } from "./LocationInput"
import { toast } from "sonner"

export default function ReportIssue() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")

    const handleGpsFetch = () => {
        if (!navigator.geolocation) {
            toast.error("Geolocation not supported");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLocation(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`);
                toast.success("Location captured");
            },
            () => toast.error("Could not get location"),
        );
    }

    // ⚡ Form Validation Trigger
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title.trim()) {
            toast.error("Validation Error", { description: "Please enter a title for the report." })
            return
        }
        if (description.trim().length < 5) {
            toast.error("Validation Error", { description: "Please provide a more descriptive summary." })
            return
        }
        if (!location.trim()) {
            toast.error("Validation Error", { description: "Location details or GPS tracking is required." })
            return
        }

        // Execution path on valid payloads
        console.log({ title, description, location })

        toast.success("Report Submitted!", {
            description: `"${title}" has been successfully logged.`,
        })

        // Clear states
        setTitle("")
        setDescription("")
        setLocation("")
    }

    return (
        <>
            <title>Report Issue - Community Hero</title>
            <Header />
            <div className="pt-30 max-w-2xl mx-auto space-y-6 px-6 pb-12">

                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Report an issue</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Help your neighborhood. The AI will auto-classify your report.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="border border-slate-200/80 bg-white rounded-2xl shadow-sm p-6 space-y-5"
                >
                    <div className="space-y-2">
                        <Label htmlFor="title" className="text-sm font-medium text-slate-900">Title</Label>
                        <Input
                            id="title"
                            placeholder="e.g. Pothole on Main St"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="h-11 rounded-xl bg-white border-slate-200 focus-visible:ring-emerald-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-sm font-medium text-slate-900">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Describe the issue, its severity and any context."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="min-h-27.5 rounded-xl bg-white border-slate-200 resize-y focus-visible:ring-emerald-600"
                        />
                    </div>


                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-slate-900">Photo</Label>
                        <PhotoUpload />
                    </div>


                    <div className="space-y-2">
                        <Label htmlFor="location" className="text-sm font-medium text-slate-900">
                            Location
                        </Label>
                        <LocationInput
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            onGpsClick={handleGpsFetch}
                        />
                    </div>

                    <Button
                        size="lg"
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors mt-2 py-5"
                    >
                        <Sparkles className="w-4 h-4" />
                        Submit report
                    </Button>

                </form>

            </div>
        </>
    )
}