import { Trophy } from "lucide-react"

const getRankStyles = (rank) => {
    switch (rank) {
        case 1: return "bg-amber-50 text-amber-600"
        case 2: return "bg-slate-100 text-slate-500"
        default: return "bg-orange-50 text-orange-700"
    }
}

export function LeaderboardItem({ name, reports, verifications, rank }) {

    const totalPoints = (reports * 10) + (verifications * 2)

    return (
        <div className="flex items-center justify-between p-5 transition-colors hover:bg-slate-50/50">

            <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${getRankStyles(rank)}`}>
                    <Trophy className="w-5 h-5" />
                </div>

                <div className="space-y-0.5">
                    <h3 className="font-semibold text-slate-900 leading-none">{name}</h3>
                    <span className="text-sm text-slate-500 font-normal block">
                        {reports} {reports === 1 ? "report" : "reports"}
                        {verifications > 0 && ` • ${verifications} verifications`}
                    </span>
                </div>
            </div>

            <div className="text-right space-y-0.5">
                <div className="text-2xl font-bold text-emerald-600 tracking-tight leading-none">
                    {totalPoints}
                </div>
                <span className="text-xs text-slate-400 font-medium block">points</span>
            </div>

        </div>
    )
}