import { Badge } from "@/components/ui/badge"

const categoryConfig = {
    "Pothole": { style: "bg-slate-100 text-slate-800 border-slate-300", icon: "🕳️" },
    "Water Leak": { style: "bg-blue-100 text-blue-800 border-blue-300", icon: "💧" },
    "Streetlight": { style: "bg-amber-100 text-amber-800 border-amber-300", icon: "💡" },
    "Waste": { style: "bg-stone-100 text-stone-800 border-stone-300", icon: "🗑️" },
    "Infrastructure": { style: "bg-orange-100 text-orange-800 border-orange-300", icon: "🏗️" },
    "Other": { style: "bg-rose-100 text-rose-800 border-rose-300", icon: "📌" },
}

export default function CategoryBadge({ category }) {
    const config = categoryConfig[category] || categoryConfig["Other"]
    return (
        <Badge variant="outline" className={`${config.style} flex items-center gap-1 w-fit`}>
            <span>{config.icon}</span>
            {category}
        </Badge>
    )
}