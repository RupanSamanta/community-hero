import { toast } from "sonner";
import { getCurrentUser, getIssues, getUsers, saveIssues, saveUsers } from "./storage.js";

export function verifyIssue(issueId, { currentUser = getCurrentUser(), issues = getIssues() } = {}) {
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
    if (verifiedBy.includes(currentUser.id)) {
        toast.info("You have already verified this issue.");
        return null;
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
