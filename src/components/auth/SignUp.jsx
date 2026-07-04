import { TabsContent } from "../ui/tabs"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { toast } from "sonner"

function SignUp() {

    function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        toast.success(`Welcome, ${formData.get("name")}!`);
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
                <form onSubmit={onSubmit}>
                    <CardContent className="space-y-4 pb-4">
                        <div className="space-y-1">
                            <Label htmlFor="signup-name">Full Name</Label>
                            <Input id="signup-name" name="name" type="text" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="signup-email">Email</Label>
                            <Input id="signup-email" name="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="signup-password">Password</Label>
                            <Input id="signup-password" name="password" type="password" required />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button size="lg" type="submit" className="w-full p-5 bg-emerald-600">Create Account</Button>
                    </CardFooter>
                </form>
            </Card>
        </TabsContent>
    )
}

export default SignUp
