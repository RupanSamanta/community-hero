import { useState } from "react"
import { toast } from "sonner"
import SignInRequiredCard from "./SignInRequiredCard"
import ReportIssueForm from "./ReportIssueForm"
import { getIssues, saveUsers, getUsers } from "@/lib/storage.js"
import { saveIssues } from "@/lib/storage.js"
import useCurrentUser from "@/hooks/useCurrentUser"
import useGeolocation from "@/hooks/useGeolocation.js"
import { useNavigate } from "react-router-dom"

const readFileAsDataUrl = (file) => {
    if (!file) return Promise.resolve(null);

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("Could not read the selected image."));
        reader.readAsDataURL(file);
    });
};

export default function ReportIssue() {
    const currentUser = useCurrentUser();
    const navigate = useNavigate();

    const isSignedIn = Boolean(currentUser?.id);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const { location, setLocation, getLocation } = useGeolocation();

    const handleGpsFetch = () => {
        toast.promise(getLocation(), {
            loading: 'Fetching location...',
            success: () => `Location fetched`,
            error: (err) => {
                switch (err.code) {
                    case err.PERMISSION_DENIED:
                        return 'Permission denied. Please allow location access.';
                    case err.POSITION_UNAVAILABLE:
                        return 'Location information is unavailable.';
                    case err.TIMEOUT:
                        return 'The request to get user location timed out.';
                    default:
                        return 'An unknown error occurred.';
                }
            },
        });
    }

    // Form Validation Trigger
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isSignedIn) {
            toast.error("Please sign in before submitting a report.");
            return;
        }

        try {
            const imageDataUrl = await readFileAsDataUrl(photo);

            const newIssue = {
                id: crypto.randomUUID(),
                title: title,
                description: description,
                category: "undefined",
                status: "reported",
                severity: "high",
                location: location,
                upvotes: 0,
                verificationCount: 0,
                verifiedBy: [],
                reportedBy: currentUser.id,
                image: imageDataUrl,
                createdAt: new Date().toISOString()
            };
            const allIssues = getIssues();
            saveIssues([newIssue, ...allIssues]);

            const updatedUsers = getUsers().map((user) => {
                if (user.id !== currentUser.id) {
                    return user;
                }

                return {
                    ...user,
                    reports: (Number(user.reports) || 0) + 1,
                };
            });
            saveUsers(updatedUsers);

            toast.success("Report Submitted!", {
                description: `"${title}" has been successfully logged.`,
            });

            // Clear states
            setTitle("");
            setDescription("");
            setLocation("");
            setPhoto(null);
            navigate('/issues', { replace: true });

        } catch (error) {
            toast.error("Unable to save the photo", {
                description: error instanceof Error ? error.message : "Please try again.",
            });
        }
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

                {!isSignedIn ?
                    <SignInRequiredCard /> :
                    <ReportIssueForm
                        title={title} setTitle={setTitle}
                        description={description} setDescription={setDescription}
                        photo={photo} setPhoto={setPhoto}
                        location={location} setLocation={setLocation}
                        handleGpsFetch={handleGpsFetch}
                        handleSubmit={handleSubmit}
                    />
                }

            </div>
        </>
    )
}
