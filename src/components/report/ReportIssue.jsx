import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { LogIn, Sparkles } from "lucide-react"
import { toast } from "sonner"
import { Link } from "react-router-dom"
import { AUTH_CHANGE_EVENT, getCurrentUser } from "@/lib/storage"

import PhotoUpload from "./PhotoUpload"
import LocationInput from "./LocationInput"

export default function ReportIssue() {
    const [currentUser, setCurrentUser] = useState(() => getCurrentUser());
    const isSignedIn = Boolean(currentUser?.id);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("");

    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        const handleAuthChange = () => setCurrentUser(getCurrentUser());

        window.addEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
        return () => window.removeEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
    }, []);

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

        if (!isSignedIn) {
            toast.error("Please sign in before submitting a report.");
            return;
        }

        // Execution path on valid payloads
        console.log({ title, description, location, reportedBy: currentUser.id })

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
            
            <div className="pt-30 max-w-2xl mx-auto space-y-6 px-6 pb-12">

                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Report an issue</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Help your neighborhood. The AI will auto-classify your report.
                    </p>
                </div>

                {!isSignedIn ? (
                    <div className="border border-slate-200/80 bg-white rounded-2xl shadow-sm p-6 space-y-4">
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">Sign in required</h2>
                            <p className="text-sm text-slate-500 mt-1">
                                You need to sign in before submitting a community report.
                            </p>
                        </div>
                        <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-3 py-4">
                            <Link to="/auth">
                                <LogIn className="w-4 h-4" />
                                Sign in to continue
                            </Link>
                        </Button>
                    </div>
                ) : (
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
                            required
                            pattern=".*\S.*"
                            title="Please enter a title for the report."
                            className="h-11 rounded-xl bg-white border-slate-200 focus-visible:ring-1 focus-visible:ring-emerald-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-sm font-medium text-slate-900">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Describe the issue, its severity and any context."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            minLength={5}
                            className="min-h-27.5 rounded-xl bg-white border-slate-200 resize-y focus-visible:ring-1 focus-visible:ring-emerald-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-slate-900">Photo</Label>
                        <PhotoUpload photo={photo} setPhoto={setPhoto} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="location" className="text-sm font-medium text-slate-900">
                            Location
                        </Label>
                        <LocationInput
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            onGpsClick={handleGpsFetch}
                            required
                            pattern=".*\S.*"
                            title="Location details or GPS tracking is required."
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
                )}

            </div>
        </>
    )
}
