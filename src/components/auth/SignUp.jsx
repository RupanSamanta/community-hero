import { TabsContent } from "../ui/tabs"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

function SignUp() {
    return (
        <TabsContent value="signup">
            <Card>
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your details below to get started today.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-1">
                        <Label htmlFor="signup-name">Full Name</Label>
                        <Input id="signup-name" type="text" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="signup-email">Email</Label>
                        <Input id="signup-email" type="email" placeholder="m@example.com" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="signup-password">Password</Label>
                        <Input id="signup-password" type="password" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button size="lg" className="w-full p-5 bg-green">Create Account</Button>
                </CardFooter>
            </Card>
        </TabsContent>
    )
}

export default SignUp