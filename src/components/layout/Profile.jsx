import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import UserIcon from "@/assets/icons/user.png"
import { LayoutDashboard, ListChecksIcon, LogOut, MailIcon, NotepadTextIcon, Settings, TrophyIcon, User2 } from "lucide-react"

function Profile({ user, handleLogout }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full p-0">
          <Avatar className="size-8">
            <AvatarImage src={UserIcon} />
            <AvatarFallback>{user.name?.[0] ?? "U"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-45 w-auto" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User2 /> {user.name}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MailIcon /> {user.email}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>
            <NotepadTextIcon /> My Reports
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ListChecksIcon /> Issues
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LayoutDashboard /> Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem>
            <TrophyIcon /> Leaderboard
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Settings /> Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" onClick={handleLogout}>
            <LogOut /> Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Profile