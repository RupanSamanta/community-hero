import Header from "../layout/Header"
import { LeaderboardItem } from "./LeaderboardItem"

const rawHeroesData = [
    { name: "Demo Citizen", reports: 1, verifications: 7 },
    { name: "Riya Kumar", reports: 2, verifications: 18 },
    { name: "Rupan Samanta", reports: 0, verifications: 0 },
    { name: "Rupamanta", reports: 4, verifications: 0 },
]

const calculatePoints = (reports, verifications) => {
    return (reports * 10) + (verifications * 2)
}

export default function Leaderboard() {
    const sortedHeroes = [...rawHeroesData].map((hero) => ({
        ...hero,
        points: calculatePoints(hero.reports, hero.verifications),
    })).sort((a, b) => b.points - a.points);

    return (
        <>
            <Header />
            <div className="pt-30 pb-12 max-w-7xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Community heroes</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Earn points by reporting (+10) and verifying (+2) issues.
                    </p>
                </div>
                <div className="border border-slate-200/80 bg-white rounded-2xl shadow-sm divide-y divide-slate-100 overflow-hidden">
                    {sortedHeroes.map((hero, index) => (
                        <LeaderboardItem
                            key={hero.name}
                            name={hero.name}
                            reports={hero.reports}
                            verifications={hero.verifications}
                            points={hero.points}
                            rank={index + 1}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}