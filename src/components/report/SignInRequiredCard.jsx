import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { LogIn } from "lucide-react"

function SignInRequiredCard() {
    return (
        <div className="border border-slate-200/80 bg-white rounded-2xl shadow-sm p-6 space-y-4">
            <div>
                <h2 className="text-lg font-semibold text-slate-900">Sign in required</h2>
                <p className="text-sm text-slate-500 mt-1">
                    You need to sign in before submitting a community report.
                </p>
            </div>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-3 py-4">
                <Link to="/auth">
                    <LogIn className="w-4 h-4" />
                    Sign in to continue
                </Link>
            </Button>
        </div>

    )
}

export default SignInRequiredCard