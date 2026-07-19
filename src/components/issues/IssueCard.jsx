import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ShieldCheck } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { CategoryBadge } from "./CategoryBadge"
import { StatusBadge } from "./StatusBadge"

import { SEVERITY_CONFIG } from "@/lib/constants"
import useCurrentUser from "@/hooks/useCurrentUser"
import VerifyButton from "./VerifyButton"
import { verifyIssue } from "@/lib/issueVerification"

export default function IssueCard({ issue, onVerify }) {
    const currentUser = useCurrentUser();
    const navigate = useNavigate();
    const { title, description, category, status, severity, location, upvotes, verifiedBy = [], image } = issue
    const verificationCount = issue.verificationCount ?? upvotes ?? 0;
    const hasVerified = Boolean(currentUser?.id && verifiedBy.includes(currentUser.id));
    const previewImage = typeof image === "string" ? image : null;

    const handleVerify = () => {
        if (hasVerified) {
            return;
        }

        if (onVerify) {
            onVerify(issue.id);
            return;
        }

        verifyIssue(issue.id);
    }

    const handleOpenDetails = () => {
        navigate(`/issues/${issue.id}`, { state: { issue } })
    }

    return (
        <Card className="w-full max-w-100 shadow-sm rounded-2xl p-0 border border-slate-200 hover:shadow-md cursor-pointer transition-shadow bg-white flex flex-col gap-0.5 justify-start" onClick={handleOpenDetails}>

            <CardHeader className="p-4 pb-3 flex flex-row flex-wrap items-center gap-2 m-0">
                <CategoryBadge category={category} />
                <StatusBadge status={status} />
                <Badge variant="outline" className={`${SEVERITY_CONFIG[severity] || SEVERITY_CONFIG["Low"]} capitalize rounded-full px-2.5 py-1 text-xs font-normal`}>
                    {severity} Severity
                </Badge>
            </CardHeader>

            <CardContent className="px-4 pb-3 space-y-2 flex-1">
                {previewImage && (
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                        <img
                            src={previewImage}
                            alt={title}
                            className="h-32 w-full object-cover"
                        />
                    </div>
                )}
                <h3 className="text-[1rem] font-semibold text-slate-900 tracking-tight leading-snug">
                    {title}
                </h3>
                <p className="text-sm text-slate-500 font-normal leading-relaxed line-clamp-2">
                    {description}
                </p>
            </CardContent>

            <CardFooter className="p-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{location}</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                        <span>{verificationCount}</span>
                    </div>
                    {
                        currentUser.id &&
                        <VerifyButton hasVerified={hasVerified} handleVerify={handleVerify} />
                    }
                </div>
            </CardFooter>
        </Card>
    )
}