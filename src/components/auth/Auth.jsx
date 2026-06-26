import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

export default function AuthCard() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-50">
            <Tabs defaultValue="signin" className="w-100">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <SignIn />
                <SignUp />
            </Tabs>
        </div>
    )
}