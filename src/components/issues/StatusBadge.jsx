import { Badge } from "@/components/ui/badge";
import { STATUS_CONFIG } from "@/lib/constants";

export function StatusBadge({ status }) {
    const badgeClasses = STATUS_CONFIG[status] || "bg-slate-100 text-slate-800 border-slate-300";

    return (
        <Badge variant="outline" className={badgeClasses}>
            {status}
        </Badge>
    );
}