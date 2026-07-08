import { Button } from "../ui/button"
import { CardContent, CardFooter } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { Eye, EyeOff } from "lucide-react"

function SignUpForm({ onSubmit }) {
    
    const [showPassword, setShowPassword] = useState(false);

    return (
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
                    <InputGroup>
                        <InputGroupInput id="signup-password" name="password" type={showPassword ? "text" : "password"} minLength="6" maxLength="32" required />
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
                <Button size="lg" type="submit" className="w-full p-5 bg-emerald-600 hover:bg-emerald-700">Create Account</Button>
            </CardFooter>
        </form>
    )
}

export default SignUpForm