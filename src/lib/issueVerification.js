import { toast } from "sonner";
import { getCurrentUser, getIssues, getUsers, saveIssues, saveUsers } from "./storage.js";

function confirmIssueUnverify() {
    return new Promise((resolve) => {
        let settled = false;

        const finalize = (value) => {
            if (settled) {
                return;
            }

            settled = true;
            resolve(value);
        };

        const toastId = toast("Remove your verification from this issue?", {
            duration: Infinity,
            dismissible: true,
            action: {
                label: "Confirm",
                onClick: () => {
                    toast.dismiss(toastId);
                    finalize(true);
                },
            },
            onDismiss: () => finalize(false),
        });
    });
}

export async function verifyIssue(issueId, { currentUser = getCurrentUser(), issues = getIssues() } = {}) {
    if (!currentUser?.id) {
        toast.error("Please sign in to verify this issue.");
        return null;
    }

    const targetIssue = issues.find((issue) => String(issue.id) === String(issueId));
    if (!targetIssue) {
        toast.error("This issue could not be found.");
        return null;
    }

    const verifiedBy = Array.isArray(targetIssue.verifiedBy) ? targetIssue.verifiedBy : [];
    const alreadyVerified = verifiedBy.some((userId) => String(userId) === String(currentUser.id));

    if (alreadyVerified) {
        const shouldRemoveVerification = await confirmIssueUnverify();
        if (!shouldRemoveVerification) {
            return null;
        }

        const nextVerificationCount = Math.max(
            Number(targetIssue.verificationCount ?? targetIssue.upvotes ?? 0) - 1,
            0,
        );
        const nextVerifiedBy = verifiedBy.filter((userId) => String(userId) !== String(currentUser.id));

        const updatedIssues = issues.map((issue) => {
            if (String(issue.id) !== String(issueId)) {
                return issue;
            }

            return {
                ...issue,
                verificationCount: nextVerificationCount,
                upvotes: nextVerificationCount,
                verifiedBy: nextVerifiedBy,
                status: nextVerificationCount > 0 ? issue.status : "reported",
            };
        });

        saveIssues(updatedIssues);

        const updatedUsers = getUsers().map((user) => {
            if (user.id !== currentUser.id) {
                return user;
            }

            return {
                ...user,
                verifications: Math.max((Number(user.verifications) || 0) - 1, 0),
            };
        });

        saveUsers(updatedUsers);
        toast.info("Your verification has been removed.");

        return updatedIssues;
    }

    const nextVerificationCount = (Number(targetIssue.verificationCount ?? targetIssue.upvotes ?? 0)) + 1;
    const updatedIssues = issues.map((issue) => {
        if (String(issue.id) !== String(issueId)) {
            return issue;
        }

        return {
            ...issue,
            verificationCount: nextVerificationCount,
            upvotes: nextVerificationCount,
            verifiedBy: [...verifiedBy, currentUser.id],
            status: issue.status === "reported" ? "verified" : issue.status,
        };
    });

    saveIssues(updatedIssues);

    const updatedUsers = getUsers().map((user) => {
        if (user.id !== currentUser.id) {
            return user;
        }

        return {
            ...user,
            verifications: (Number(user.verifications) || 0) + 1,
        };
    });

    saveUsers(updatedUsers);
    toast.success("Issue verified. Your community hero score has increased.");

    return updatedIssues;
}
