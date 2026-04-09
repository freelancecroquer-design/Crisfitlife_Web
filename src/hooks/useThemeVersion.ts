import { useState, useEffect } from "react";

export function useThemeVersion() {
    const [version, setVersion] = useState<string | null>(null);
    useEffect(() => {
        const getV = () => new URLSearchParams(window.location.search).get("v") || sessionStorage.getItem("GP_THEME") || "0";
        setVersion(getV());
    }, []);
    return version;
}
