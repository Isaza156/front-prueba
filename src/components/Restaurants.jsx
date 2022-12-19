import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Restaurants() {

    const navigate  = useNavigate ();

    const handleClick = () => {
        localStorage.removeItem("userName")
        localStorage.removeItem("password")       
        navigate('/', { replace: true })
    }

    const validateData = () => {
        let user = localStorage.getItem("userName")
        let pass = localStorage.getItem("password")
        if(user === null || pass === null) {
            navigate('/', { replace: true })
        }
    }

    useEffect(() => {
        validateData()
    }, []);
   
    return (
        <div className="container">
            <div className="container-logout">
                <button onClick={handleClick}>Cerrar Sesión</button>
            </div>
        </div>
    )
}
