import { useEffect, useMemo, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, CalendarDays, MapPin, ShieldCheck, User2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import VerifyButton from "./VerifyButton"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { getIssues } from "@/lib/storage.js"
import useCurrentUser from "@/hooks/useCurrentUser"
import { verifyIssue } from "@/lib/issueVerification"
import { Separator } from "../ui/separator"

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
    const [issue, setIssue] = useState(() => {
        return location.state?.issue ?? getIssues().find((item) => String(item.id) === String(id))
    });

    useEffect(() => {
        setIssue(location.state?.issue ?? getIssues().find((item) => String(item.id) === String(id)));
    }, [id, location.state?.issue]);

    const verifiedBy = Array.isArray(issue?.verifiedBy) ? issue.verifiedBy : [];
    const hasVerified = Boolean(currentUser?.id && verifiedBy.includes(currentUser.id));

    const handleVerify = async () => {
        const updatedIssues = await verifyIssue(issue.id);
        if (!updatedIssues) {
            return;
        }

        const nextIssue = updatedIssues.find((item) => String(item.id) === String(issue.id));
        if (nextIssue) {
            setIssue(nextIssue);
        }
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
    const title = (issue.title || "Issue details") + " - Community Hero";
    const summaryItems = [
        {
            label: "Reported by",
            value: issue.reportedBy || "Community member",
            icon: <User2 className="h-4 w-4" />,
        },
        {
            label: "Status",
            value: issue.status || "reported",
        },
        {
            label: "Category",
            value: issue.category || "other",
        },
        {
            label: "Severity",
            value: issue.severity || "other",
        },
    ];

    const timelineItems = [
        {
            title: "Reported",
            detail: formatDate(issue.createdAt),
            accent: "emerald-500",
        },
        {
            title: "Community verification",
            detail: `${issue.verificationCount ?? issue.upvotes ?? 0} citizens confirmed this issue`,
            accent: "sky-500",
        },
        {
            title: "Current status",
            detail: issue.status || "reported",
            accent: "amber-500",
        },
    ];

    return (
        <>
            <title>{title}</title>
            <div className="pt-25 pb-12 px-6 max-w-5xl mx-auto space-y-6">
                <Button variant="ghost" className="pl-0" onClick={() => navigate(-1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>

                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="space-y-4">
                        {previewImage && (
                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                                <img src={previewImage} alt={issue.title} className="h-80 w-full object-cover" />
                            </div>
                        )}

                        <Card className="border-slate-200/80 shadow-sm">
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

                    <Card className="border-slate-200/80 shadow-sm p-4 px-6">
                        <CardContent className="space-y-4 text-sm text-slate-600 p-0">
                            <h2 className="text-lg font-semibold text-slate-900">Issue summary</h2>
                            <div className="space-y-3">
                                {summaryItems.map((item) => (
                                    <div key={item.label} className="grid grid-cols-2 items-center">
                                        <p className="text-xs uppercase text-slate-400">{item.label}</p>
                                        <p className="font-medium capitalize text-slate-900 text-nowrap truncate">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <Separator />
                        <CardContent className="space-y-4 text-sm text-slate-600 p-0 pb-4">
                            <h2 className="text-lg font-semibold text-slate-900">Timeline</h2>
                            <ol className="mt-4 space-y-3">
                                {timelineItems.map((item, ind) => (
                                    <li key={item.title} className="grid grid-cols-[1.25rem_minmax(0,1fr)] items-start gap-x-3 gap-y-1">
                                        <div className="relative col-start-1 row-span-2 flex justify-center -mt-0.5">
                                            <span className={`mt-1 size-4 rounded-full bg-${item.accent} border-2 border-${item.accent}/50`} />
                                            {timelineItems.length != ind+1 && <span className="absolute left-1/2 top-6 h-full w-px -translate-x-1/2 bg-slate-200" />}
                                        </div>
                                        <p className="col-start-2 text-sm font-medium text-slate-900">{item.title}</p>
                                        <p className="col-start-2 text-xs uppercase tracking-widest text-slate-400">{item.detail}</p>
                                    </li>
                                ))}
                            </ol>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default IssueDetailsPage;