import { LayoutDashboard, ListChecks, Trophy } from "lucide-react"
import { NavLink } from "react-router-dom";

export default function Navigation() {

  const navItems = [
    { path: "/issues", label: "Issues", icon: ListChecks },
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/leaderboard", label: "Leaderboard", icon: Trophy },
  ];

  return (
    <nav className="flex justify-between items-center gap-8">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 text-sm font-medium rounded-md p-2 transition-colors 
              ${isActive
                ? "bg-orange-200 text-black"
                : "text-gray-600 hover:bg-orange-100 hover:text-black"
              }`
            }
          >
            <Icon className="size-4" />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}