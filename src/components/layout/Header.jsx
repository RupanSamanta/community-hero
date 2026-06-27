import { MapPin } from "lucide-react"
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar"

function Header() {
    return (
        <header className="w-full absolute top-0 left-1/2 -translate-x-1/2 z-10 py-4 flex justify-between items-center border-b border-b-gray-300 backdrop-blur-sm">
            <Link to="/home">
                <div className="home-icon flex items-center gap-2 cursor-pointer">
                    <div className="size-9 rounded-md bg-green grid place-items-center">
                        <MapPin className="size-5 text-gray-50" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-md font-medium -mb-1">Community Hero</span>
                        <span className="text-[0.75rem] font-normal text-gray-600">Hyperlocal Problem Solver</span>
                    </div>
                </div>
            </Link>
            <Navbar />
            <Link to="/auth">
                <Button className="bg-green rounded-md text-[0.75rem]">Sign In</Button>
            </Link>
        </header>
    )
}

export default Header