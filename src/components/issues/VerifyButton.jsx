import { useState } from "react"
import { Button } from "../ui/button"
import { CheckCircle2, ShieldCheck } from "lucide-react"

function VerifyButton({ hasVerified, handleVerify }) {
    const [isPending, setIsPending] = useState(false);

    const handleClick = async (event) => {
        event.stopPropagation();

        if (isPending) {
            return;
        }

        setIsPending(true);

        try {
            await Promise.resolve(handleVerify());
        } finally {
            setIsPending(false);
        }
    }

    return (
        <Button
            type="button"
            size="sm"
            variant={hasVerified ? "secondary" : "outline"}
            disabled={isPending}
            className="rounded-full px-3 py-1.5 text-[0.7rem] font-semibold"
            onClick={handleClick}
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