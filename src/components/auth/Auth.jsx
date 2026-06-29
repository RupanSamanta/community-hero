import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

export default function AuthCard() {
    return (
        <>
            <title>Sign In - Community Hero</title>
            
            <div className="flex justify-center items-center min-h-screen">
                <Tabs defaultValue="signin" className="w-100">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <SignIn />
                    <SignUp />
                </Tabs>
            </div>
        </>
    )
}