import { Upload } from "lucide-react"

export function PhotoUpload() {
    return (
        <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center bg-white hover:bg-slate-50/50 transition-colors cursor-pointer group">
            <Upload className="w-5 h-5 text-slate-500 group-hover:text-slate-700 mb-2" />
            <span className="text-sm text-slate-600">
                Click to upload <span className="text-slate-400 font-normal">(max 4MB)</span>
            </span>
        </div>
    )
}