import { useMemo } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, CalendarDays, MapPin, ShieldCheck, User2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import VerifyButton from "./VerifyButton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CategoryBadge } from "./CategoryBadge"
import { StatusBadge } from "./StatusBadge"
import { SEVERITY_CONFIG } from "@/lib/constants"
import { getIssues } from "@/lib/storage.js"
import useCurrentUser from "@/hooks/useCurrentUser"
import { verifyIssue } from "@/lib/issueVerification"

function formatDate(value) {
    if (!value) return "Unknown"

    try {
        return new Date(value).toLocaleDateString("en", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
    } catch {
        return value
    }
}

function IssueDetailsPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const currentUser = useCurrentUser();
    
    const issue = useMemo(() => {
        return location.state?.issue ?? getIssues().find((item) => String(item.id) === String(id))
    }, [id, location.state?.issue]);
    
    const verifiedBy = Array.isArray(issue?.verifiedBy) ? issue.verifiedBy : [];
    const hasVerified = Boolean(currentUser?.id && verifiedBy.includes(currentUser.id));
    
    const handleVerify = () => {
        if (hasVerified) {
            return;
        }

        verifyIssue(issue.id);
    }

    if (!issue) {
        return (
            <div className="pt-30 pb-12 px-6 max-w-4xl mx-auto space-y-4">
                <Button variant="ghost" className="pl-0" onClick={() => navigate(-1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
                <Card className="border-dashed border-slate-300 bg-white/70">
                    <CardContent className="p-8 text-center text-slate-600">
                        This issue could not be found.
                    </CardContent>
                </Card>
            </div>
        )
    }

    const previewImage = typeof issue.image === "string" ? issue.image : null;
    const severityClass = SEVERITY_CONFIG[issue.severity] || SEVERITY_CONFIG.low;
    const title = (issue.title || "Issue details") + " - Community Hero";

    return (
        <>
            <title>{title}</title>
            <div className="pt-30 pb-12 px-6 max-w-5xl mx-auto space-y-6">
                <Button variant="ghost" className="pl-0" onClick={() => navigate(-1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to issues
                </Button>

                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="space-y-4">
                        {previewImage && (
                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                                <img src={previewImage} alt={issue.title} className="h-80 w-full object-cover" />
                            </div>
                        )}

                        <Card className="border-slate-200/80 shadow-sm">
                            <CardHeader className="flex flex-wrap items-center gap-2">
                                <CategoryBadge category={issue.category} />
                                <StatusBadge status={issue.status} />
                                <Badge variant="outline" className={`${severityClass} capitalize rounded-full px-2.5 py-1 text-xs font-normal`}>
                                    {issue.severity} severity
                                </Badge>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{issue.title}</h1>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">{issue.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-slate-400" />
                                        <span>{issue.location || "Location not provided"}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CalendarDays className="h-4 w-4 text-slate-400" />
                                        <span>{formatDate(issue.createdAt)}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <div className="flex items-center gap-2 text-slate-500">
                                    <ShieldCheck className="h-4 w-4 text-slate-500" />
                                    <span>Verified by {issue.verificationCount ?? issue.upvotes ?? 0} citizens

                                    </span>
                                </div>
                                <VerifyButton hasVerified={hasVerified} handleVerify={handleVerify} />
                            </CardFooter>
                        </Card>
                    </div>

                    <Card className="border-slate-200/80 shadow-sm">
                        <CardHeader>
                            <h2 className="text-lg font-semibold text-slate-900">Issue summary</h2>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm text-slate-600">
                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Reported by</p>
                                <div className="mt-2 flex items-center gap-2 text-slate-900">
                                    <User2 className="h-4 w-4" />
                                    <span>{issue.reportedBy || "Community member"}</span>
                                </div>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Status</p>
                                <p className="mt-2 font-medium capitalize text-slate-900">{issue.status || "reported"}</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Category</p>
                                <p className="mt-2 font-medium capitalize text-slate-900">{issue.category || "other"}</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Severity</p>
                                <p className="mt-2 font-medium capitalize text-slate-900">{issue.severity || "other"}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default IssueDetailsPage;