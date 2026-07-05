import { KpiSection } from "./KpiSection"
import { CategoryChart } from "./CategoryChart"
import { StatusChart } from "./StatusChart"
import { issues } from "@/data/issues"

const normalizeStatus = (status) => status.toLowerCase();

function Dashboard() {
    const dashboard = {
        totalIssues: issues.length,
        openIssues: issues.filter(issue => normalizeStatus(issue.status) !== "resolved").length,
        inProgressIssues: issues.filter(issue => normalizeStatus(issue.status) === "in progress").length,
        resolvedIssues: issues.filter(issue => normalizeStatus(issue.status) === "resolved").length,
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
                    <CategoryChart issues={issues} />
                    <StatusChart issues={issues} />
                </div>
            </div>
        </>
    )
}

export default Dashboard
