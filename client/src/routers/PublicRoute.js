import React from "react";
import { Navigate } from "react-router-dom";
const PublicRoute = ({ children }) => {
        const temp = JSON.parse(localStorage.getItem("token_rare"));
        if (temp) {
            return <Navigate to="/dashboard" />;
        }

    return children;
};

export default PublicRoute;
