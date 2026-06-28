import Header from "../layout/Header"
import { LeaderboardItem } from "./LeaderboardItem"

const heroesData = [
    { name: "Riya Kumar", reports: 2, verifications: 18, rank: 1 },
    { name: "Demo Citizen", reports: 1, verifications: 7, rank: 2 },
    { name: "Rupan Samanta", reports: 0, verifications: 0, rank: 3 },
]

export default function Leaderboard() {
    return (
        <>
            <Header />
            <div className="pt-30 max-w-7xl mx-auto space-y-8 px-6 pb-12">

                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Community heroes</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Earn points by reporting (+10) and verifying (+2) issues.
                    </p>
                </div>

                <div className="border border-slate-200/80 bg-white rounded-2xl shadow-sm divide-y divide-slate-100 overflow-hidden">
                    {heroesData.map((hero) => (
                        <LeaderboardItem
                            key={hero.name}
                            name={hero.name}
                            reports={hero.reports}
                            verifications={hero.verifications}
                            rank={hero.rank}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}