import { TabsContent } from "../ui/tabs"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

function SignIn() {
    return (
        <TabsContent value="signin">
            <Card>
                <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>
                        Enter your email and password to access your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-1">
                        <Label htmlFor="signin-email">Email</Label>
                        <Input id="signin-email" type="email" placeholder="m@example.com" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="signin-password">Password</Label>
                        <Input id="signin-password" type="password" />
                    </div>
                </CardContent>
                <CardFooter>
                <Button size="lg" className="w-full p-5 bg-green">Sign In</Button>
                </CardFooter>
            </Card>
        </TabsContent>
    )
}

export default SignIn