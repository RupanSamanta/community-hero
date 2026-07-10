import { KpiSection } from "./KpiSection"
import { CategoryChart } from "./CategoryChart"
import { StatusChart } from "./StatusChart"
import { getIssues } from "@/lib/storage.js";

const normalizeStatus = (status) => status.toLowerCase();

function Dashboard() {
    const allIssues = getIssues();
    const dashboard = {
        totalIssues: allIssues.length,
        openIssues: allIssues.filter(issue => normalizeStatus(issue.status) !== "resolved").length,
        inProgressIssues: allIssues.filter(issue => normalizeStatus(issue.status) === "in progress").length,
        resolvedIssues: allIssues.filter(issue => normalizeStatus(issue.status) === "resolved").length,
    };

    return (
        <>
            <title>Dashboard - Community Hero</title>

            <div className="pt-30 max-w-7xl mx-auto space-y-8 pb-12">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Impact dashboard</h1>
                    <p className="text-gray-500 text-sm mt-1">Community-wide performance snapshot</p>
                </div>
                <KpiSection data={dashboard} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <CategoryChart issues={allIssues} />
                    <StatusChart issues={allIssues} />
                </div>
            </div>
        </>
    )
}

export default Dashboard
