import { Upload, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function PhotoUpload({ photo, setPhoto }) {

    const fileInputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        if (!photo) {
            setPreviewUrl(null);
            return;
        }

        const url = URL.createObjectURL(photo);
        setPreviewUrl(url);

        return () => URL.revokeObjectURL(url);
    }, [photo]);

    const handleBoxClick = () => {
        fileInputRef.current?.click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files?.[0]
        if (!file) return;

        if (file.size > 4 * 1024 * 1024) {
            toast.error("File too large", {
                description: "Please upload an image smaller than 4MB.",
            });
            return
        }

        setPhoto(file)
    }

    const handleRemovePhoto = (e) => {
        e.stopPropagation() // Prevents triggering the box click handler
        setPhoto(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = "" // Clears the element memory cache
        }
    }

    return (
        <>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />
            {!previewUrl ? (
                <div onClick={handleBoxClick}
                   className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center bg-white hover:bg-slate-50/50 transition-colors cursor-pointer group">
                    <Upload className="w-5 h-5 text-slate-500 group-hover:text-slate-700 mb-2" />
                    <span className="text-sm text-slate-600">
                        Click to upload <span className="text-slate-400 font-normal">(max 4MB)</span>
                    </span>
                </div>
            ) : (
                <div className="relative border border-slate-200 rounded-xl overflow-hidden aspect-video max-h-48 w-full bg-slate-50 flex items-center justify-center group">
                    <img
                        src={previewUrl}
                        alt="Report upload preview"
                        className="h-full w-full object-cover"
                    />
                    <Button
                        type="button"
                        onClick={handleRemovePhoto}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors shadow-sm"
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>
            )}
        </>
    )
}
