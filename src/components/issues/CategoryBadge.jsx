import { CATEGORY_CONFIG } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function CategoryBadge({ category }) {
    const config = CATEGORY_CONFIG[category] || CATEGORY_CONFIG["other"];

    return (
        <Badge variant="outline" className={`${config.style} flex items-center gap-1 px-2.5 py-1 font-normal capitalize`}>
            <span>{config.icon}</span>
            {category}
        </Badge>
    );
}