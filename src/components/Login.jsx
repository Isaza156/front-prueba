import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [state, setState] = useState({
        userName: '',
        password: ''
    })

    const navigate  = useNavigate ();
    
    const handleclick = () => {
        fetch("http://localhost:3001/login", {
	        headers: {
            	'Access-Control-Allow-Origin': '*'
        	},
            mode: 'cors',
            method: 'Post',
            body: JSON.stringify(state)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data?.status === false) {
                alert("Usuario o contraseña incorrecto")
            } else {
                localStorage.setItem("userName", state.userName)
                localStorage.setItem("password", state.password)
                navigate('/restaurants', { replace: true })
            }
        })
        .catch((error) => console.log(error));
    }

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const getData = () => {
        let user = localStorage.getItem("userName")
        let pass = localStorage.getItem("password")
        console.log(user)
        console.log(pass)
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
                <h2>Inicia Sesión</h2>
                <label>Usuario</label>
                <input type="text" name="userName" value={state.userName} onChange={handleChange}/>
                <label>Contraseña</label>
                <input type="password" name="password" value={state.password} onChange={handleChange}/> 
                <button onClick={handleclick} disabled={!state.userName || !state.password}>Iniciar Sesión</button>
                <button>
                    <Link to="/register" style={{"textDecoration": "none", "color": "white"}}>Registrarse</Link>
                </button>
            </div>
        </div>
    )
}
