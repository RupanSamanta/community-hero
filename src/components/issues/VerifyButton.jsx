import { Button } from "../ui/button"
import { CheckCircle2, ShieldCheck } from "lucide-react"

function VerifyButton({ hasVerified, handleVerify }) {
    return (
        <Button
            type="button"
            size="sm"
            variant={hasVerified ? "secondary" : "outline"}
            className="rounded-full px-3 py-1.5 text-[0.7rem] font-semibold"
            onClick={(event) => {
                event.stopPropagation()
                handleVerify()
            }}
        >
            {hasVerified ? (
                <CheckCircle2 className="w-3.5 h-3.5" />
            ) : (
                <ShieldCheck className="w-3.5 h-3.5" />
            )}
            <span>{hasVerified ? "Unverify" : "Verify"}</span>
        </Button>
    )
}

export default VerifyButton