import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [state, setState] = useState({
        userName: '',
        password: ''
    })

    const navigate  = useNavigate ();

    const handleclick = () => {
        fetch("http://localhost:3001/register", {
	        headers: {
            	'Access-Control-Allow-Origin': '*'
        	},
            mode: 'cors',
            method: 'Post',
            body: JSON.stringify(state)
        })
        .then((response) => response.json())
        .then((data) => {
            data?.status === false ? alert("Este usuario ya se encuentra registrado") : navigate('/', { replace: true })
        })
        .catch((error) => console.log(error));
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const getData = () => {
        let user = localStorage.getItem("userName")
        let pass = localStorage.getItem("password")
        if(user !== null || pass !== null) {
            navigate('/restaurants', { replace: true })
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="container">
            <div className="header">
                <h1>Bienvenido</h1>
            </div>
            <div className="container-login">
                <h2>Regístrate</h2>
                <label>Usuario</label>
                <input type="text" name="userName" value={state.userName} onChange={handleChange} />
                <label>Contraseña</label>
                <input type="password" name="password" value={state.password} onChange={handleChange} />
                <button onClick={handleclick} disabled={!state.userName || !state.password}>Registrarse</button>
                <button>
                    <Link to="/" style={{ "textDecoration": "none", "color": "white" }}>Iniciar Sesión</Link>
                </button>
            </div>
        </div>
    )
}
