import { LayoutDashboard, ListChecks, Trophy } from "lucide-react"

function Navbar() {
  const iconSize = 'size-4';
  return (
    <nav className="flex justify-between items-center gap-8 *:flex *:items-center *:gap-2 *:text-sm *:text-gray-600 *:font-medium *:hover:bg-peach *:rounded-md *:p-2 *:cursor-pointer">
      <div>
        <ListChecks className={iconSize} />
        <span>Issues</span>
      </div>
      <div>
        <LayoutDashboard className={iconSize} />
        <span>Dashboard</span>
      </div>
      <div>
        <Trophy className={iconSize} />
        <span>Leaderboard</span>
      </div>
    </nav>
  )
}

export default Navbar