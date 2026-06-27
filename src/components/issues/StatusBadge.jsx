import { Badge } from "@/components/ui/badge"

const statusConfig = {
    "Reported": "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200",
    "Verified": "bg-indigo-100 text-indigo-700 border-indigo-300 hover:bg-indigo-200",
    "In Progress": "bg-sky-100 text-sky-700 border-sky-300 hover:bg-sky-200",
    "Resolved": "bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200",
}

export default function StatusBadge({ status }) {
    const badgeClasses = statusConfig[status] || "bg-slate-100 text-slate-800 border-slate-300"
    return (
        <Badge variant="outline" className={badgeClasses}>
            {status}
        </Badge>
    )
}