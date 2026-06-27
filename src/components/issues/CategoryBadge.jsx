import { CATEGORY_CONFIG } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function CategoryBadge({ category }) {
    const config = CATEGORY_CONFIG[category] || CATEGORY_CONFIG["Other"];

    return (
        <Badge variant="outline" className={`${config.style} flex items-center gap-1`}>
            <span>{config.icon}</span>
            {category}
        </Badge>
    );
}