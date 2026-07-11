import { useState } from "react";

function useGeolocation() {
    const [location, setLocation] = useState("");

    const getLocation = () => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error("Geolocation not supported"));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const value = `${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;
                    setLocation(value);
                    resolve(value);
                },
                () => {
                    setLocation("");
                    reject(new Error("Could not get location"));
                }
            );
        });
    };

    return { location, setLocation, getLocation };
}

export default useGeolocation;