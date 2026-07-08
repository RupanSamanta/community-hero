import { useEffect, useState } from "react"
import { toast } from "sonner"
import { AUTH_CHANGE_EVENT, getCurrentUser } from "@/lib/storage"
import SignInRequiredCard from "./SignInRequiredCard"
import ReportIssueForm from "./ReportIssueForm";

export default function ReportIssue() {
    const [currentUser, setCurrentUser] = useState(() => getCurrentUser());
    const isSignedIn = Boolean(currentUser?.id);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
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

        const locationPromise = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const coords = {
                        lat: pos.coords.latitude.toFixed(4),
                        lon: pos.coords.longitude.toFixed(4)
                    }
                    setLocation(`${coords.lat}, ${coords.lon}`);
                    resolve(coords);
                },
                (error) => {
                    setLocation("");
                    reject(error);
                }
            );
        });

        toast.promise(locationPromise, {
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
        })

    }

    // ⚡ Form Validation Trigger
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!isSignedIn) {
            toast.error("Please sign in before submitting a report.");
            return;
        }

        // Execution path on valid payloads
        console.log({ title, description, location, reportedBy: currentUser.id, photo })

        toast.success("Report Submitted!", {
            description: `"${title}" has been successfully logged.`,
        })

        // Clear states
        setTitle("");
        setDescription("");
        setLocation("");
        setPhoto(null);
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
