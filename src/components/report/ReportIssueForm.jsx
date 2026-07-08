import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

import PhotoUpload from "./PhotoUpload"
import LocationInput from "./LocationInput"

function ReportIssueForm({ title, setTitle, description, setDescription, photo, setPhoto, location, setLocation, handleGpsFetch, handleSubmit}) {
    return (
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
    )
}

export default ReportIssueForm