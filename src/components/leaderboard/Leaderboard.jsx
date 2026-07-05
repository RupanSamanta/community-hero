import { LeaderboardItem } from "./LeaderboardItem"
import { users } from "@/data/users"

const calculatePoints = (reports, verifications) => {
    return (reports * 10) + (verifications * 2)
}

export default function Leaderboard() {
    const sortedHeroes = [...users].map((hero) => ({
        ...hero,
        points: calculatePoints(hero.reports, hero.verifications),
    })).sort((a, b) => b.points - a.points);

    return (
        <>
            <title>Leaderboard - Community Hero</title>

            <div className="pt-30 pb-12 max-w-7xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Community heroes</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Earn points by reporting (+10) and verifying (+2) issues.
                    </p>
                </div>
                <div className="border border-slate-200/50 bg-white rounded-2xl shadow-sm divide-y divide-slate-100 overflow-hidden *:nth-of-type-[even]:bg-gray-100/40">
                    {sortedHeroes.length > 0 ? (
                        sortedHeroes.map((hero, index) => (
                            <LeaderboardItem
                                key={hero.name}
                                name={hero.name}
                                reports={hero.reports}
                                verifications={hero.verifications}
                                points={hero.points}
                                rank={index + 1}
                            />
                        ))
                    ) : (
                        <div className="col-span-3 h-40 flex justify-center items-center text-slate-500 rounded-lg border-dashed border border-gray-300">
                            No heroes here yet.
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}