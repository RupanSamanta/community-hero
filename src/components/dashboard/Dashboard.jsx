import Header from "../layout/Header"
import { KpiSection } from "./KpiSection"
import { CategoryChart } from "./CategoryChart"
import { StatusChart } from "./StatusChart"

function Dashboard() {
    return (
        <>
            <Header />
            <div className="pt-30 max-w-7xl mx-auto space-y-8 pb-12">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Impact dashboard</h1>
                    <p className="text-gray-500 text-sm mt-1">Community-wide performance snapshot</p>
                </div>
                <KpiSection />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <CategoryChart />
                    <StatusChart />
                </div>
            </div>
        </>
    )
}

export default Dashboard