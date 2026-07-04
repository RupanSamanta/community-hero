import { TabsContent } from "../ui/tabs"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { toast } from "sonner"

function SignIn() {
    function onSubmit(e) {
        e.preventDefault();
        toast.success("Signed in successfully");
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
                <form onSubmit={onSubmit}>
                    <CardContent className="space-y-4 pb-4">
                        <div className="space-y-1">
                            <Label htmlFor="signin-email">Email</Label>
                            <Input id="signin-email" name="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="signin-password">Password</Label>
                            <Input id="signin-password" name="password" type="password" required />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button size="lg" type="submit" className="w-full p-5 bg-emerald-600">Sign In</Button>
                    </CardFooter>
                </form>
            </Card>
        </TabsContent>
    )
}

export default SignIn
