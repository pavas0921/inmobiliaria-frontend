import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarComponent } from "../../components/Navbar";

const Dashboard = () => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            navigate("/")
        }

    }, [token]);
    return (
        <div>
            <div><NavbarComponent /></div>
        </div>
    )
}

export default Dashboard