import { MapPin } from "lucide-react"
import Navbar from "@/components/home/Navbar"
import { Button } from "../ui/button";

function Header() {
    return (
        <header className="padding py-4 flex justify-between border border-b-gray-300">
            <div className="home-icon flex items-center gap-2 cursor-pointer">
                <div className="size-9 rounded-md bg-green grid place-items-center">
                    <MapPin className="size-5 text-gray-50" />
                </div>
                <div className="flex flex-col">
                    <span className="text-md font-medium -mb-1">Community Hero</span>
                    <span className="text-[0.75rem] font-normal text-gray-600">Hyperlocal Problem Solver</span>
                </div>
            </div>
            <Navbar />
            <Button className="bg-green rounded-md text-[0.75rem]">Sign In</Button>
        </header>
    )
}

export default Header