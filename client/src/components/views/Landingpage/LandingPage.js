import React, { useEffect } from "react";
import axios from "axios";

function LandingPage() {
    useEffect(() => {
        axios.get("/api/hello").then((res) => {
            console.log(res.data);
        });
    }, []);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            LandingPage
        </div>
    );
}

export default LandingPage;
