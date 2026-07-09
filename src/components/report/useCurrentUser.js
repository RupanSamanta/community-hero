import { useEffect, useState } from "react"
import { AUTH_CHANGE_EVENT, getCurrentUser } from "@/lib/storage"

function useCurrentUser() {
    const [currentUser, setCurrentUser] = useState(() => getCurrentUser());

    useEffect(() => {
        const handleAuthChange = () => setCurrentUser(getCurrentUser());
        window.addEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
        return () => window.removeEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
    }, []);
}

export default useCurrentUser;