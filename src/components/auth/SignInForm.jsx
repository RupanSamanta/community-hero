import { Button } from "../ui/button"
import { CardContent, CardFooter } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { Eye, EyeOff } from "lucide-react"

function SignInForm({ onSubmit }) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form onSubmit={onSubmit}>
            <CardContent className="space-y-4 pb-4">
                <div className="space-y-1">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input id="signin-email" name="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="signin-password">Password</Label>
                    <InputGroup>
                        <InputGroupInput id="signin-password" name="password" type={showPassword ? "text" : "password"} minLength="6" maxLength="32" required />
                        <InputGroupAddon align="inline-end">
                            <Button size="md" type="button" variant="ghost" className="mr-2 hover:bg-transparent"
                                onClick={() => { setShowPassword(prev => !prev) }}
                            >
                                {showPassword ? <EyeOff /> : <Eye />}
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </CardContent>
            <CardFooter>
                <Button size="lg" type="submit" className="w-full p-5 bg-emerald-600">Sign In</Button>
            </CardFooter>
        </form>
    )
}

export default SignInForm