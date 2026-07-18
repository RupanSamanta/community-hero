import { LogOut, MapPin } from "lucide-react"
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { clearCurrentUser } from "@/lib/storage";
import Navbar from "@/components/layout/Navbar"
import useCurrentUser from "@/hooks/useCurrentUser.js";

function Header() {
    const currentUser = useCurrentUser();
    const isSignedIn = Boolean(currentUser?.id);
    const navigate = useNavigate();

    const handleLogout = () => {
        clearCurrentUser();
        navigate('/auth');
    }

    return (
        <header className="w-full sticky top-0 z-10 py-4 mb-[-70.8px] flex justify-between items-center border-b border-b-gray-300 bg-[#f9fcf9]">
            <Link to="/home">
                <div className="home-icon flex items-center gap-2 cursor-pointer">
                    <div className="size-9 rounded-md bg-emerald-600 grid place-items-center">
                        <MapPin className="size-5 text-gray-50" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-md font-medium -mb-1">Community Hero</span>
                        <span className="text-[0.75rem] font-normal text-gray-600">Hyperlocal Problem Solver</span>
                    </div>
                </div>
            </Link>
            <Navbar />
            <div>
                {isSignedIn ? (
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-slate-700">
                            {currentUser.name}
                        </span>
                        <Button
                            type="button"
                            size="icon"
                            variant="destructive"
                            className="rounded-md text-[0.75rem] border-red-800 bg-red-600 hover:bg-red-700 text-white"
                            onClick={handleLogout}
                            title="Log Out"
                        >
                            <LogOut />
                        </Button>
                    </div>
                ) : (
                    <Link to="/auth">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-md text-[0.75rem]">Sign In</Button>
                    </Link>
                )}
            </div>
        </header>
    )
}

export default Header
