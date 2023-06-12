import React, { useEffect } from "react";
import { navigate } from "gatsby";

export default function PageNotFound() {
    useEffect(() => {
        navigate("/");
    }, []);

    return null;
}