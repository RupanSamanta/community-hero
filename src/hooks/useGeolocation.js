import { useState } from "react";

export function useGeolocation() {
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getLocation = () => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported");
            return;
        }

        setLoading(true);
        setError("");

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const value = `${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;
                setLocation(value);
                setLoading(false);
            },
            () => {
                setError("Could not get location");
                setLocation("");
                setLoading(false);
            }
        );
    };

    return { location, loading, error, getLocation, setLocation };
}