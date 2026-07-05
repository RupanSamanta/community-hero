import { TabsContent } from "../ui/tabs"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { toast } from "sonner"
import { getUsers, saveCurrentUser } from "@/lib/storage"

import SignInForm from "./SignInForm";
import { useNavigate } from "react-router-dom";

function SignIn() {

    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);

        const allUsers = getUsers();
        const currentUser = allUsers.find(
            user => user.email === formData.get("email") && 
            user.password === formData.get("password")
        );
        
        if (currentUser) {
            saveCurrentUser(currentUser);
            toast.success("Welcome back, " + currentUser.name);
            e.currentTarget.reset();
            navigate('/home', { replace: true });

        } else {
            toast.error("Invalid email or password");
        }
    }

    return (
        <TabsContent value="signin">
            <Card>
                <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>
                        Enter your email and password to access your account.
                    </CardDescription>
                </CardHeader>
                <SignInForm onSubmit={onSubmit} />
            </Card>
        </TabsContent>
    )
}

export default SignIn
