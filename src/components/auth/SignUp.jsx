import { TabsContent } from "../ui/tabs"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { toast } from "sonner"
import { getUsers, saveCurrentUser, saveUsers } from "@/lib/storage"

import SignUpForm from "./SignUpForm";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const allUsers = getUsers();

        if (allUsers.filter(user => user.email === formData.get("email")).length > 0) {
            toast.error("Email already exists! Sign in or use a different email.");
            return;
        }

        const newUser = {
            id: crypto.randomUUID(),
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            role: "citizen",
            reports: 0,
            verifications: 0,
            createdAt: new Date().toISOString(),
        };
        saveUsers([...allUsers, newUser]);
        saveCurrentUser(newUser);
        e.currentTarget.reset();
        toast.success(`Welcome, ${formData.get("name")}!`);
        navigate('/home', { replace: true });
    }

    return (
        <TabsContent value="signup">
            <Card>
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your details below to get started today.
                    </CardDescription>
                </CardHeader>
                <SignUpForm onSubmit={onSubmit} />
            </Card>
        </TabsContent>
    )
}

export default SignUp
