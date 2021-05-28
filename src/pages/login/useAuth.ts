import React, { useLayoutEffect, useState } from 'react';

export const useAuth = (email: string, password: string, isKeepMeSignedIn: boolean, onLoggedIn?: () => void) => {
    //some placeholder logic for being authenticated
    const [hasLoginFailed, setHasLoginFailed] = useState<boolean | null>(null);

    useLayoutEffect(() => {
        if (sessionStorage.getItem("keepLoggedIn") === "true") {
            onLoggedIn?.();
        }
    }, []);

    return [
        () => {
            if (email === "adam@gmail.com" && password === "pass1234") {
                onLoggedIn?.();
                setHasLoginFailed(false);
                if (isKeepMeSignedIn) sessionStorage.setItem("keepLoggedIn", "true");
                return;
            }

            sessionStorage.setItem("keepLoggedIn", "false");
            setHasLoginFailed(true);
        },
        hasLoginFailed,
    ] as [() => void, boolean | null];
};
