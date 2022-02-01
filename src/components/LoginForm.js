import React, {useState} from "react";

function LoginForm({login, error}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""})

    const submitHandler = (e) => {
        e.preventDefault();

        login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="picture">
                <img src={require("../assets/descarga.png")} />
            </div>
            <div className="form-inner">
                <h2>Inicio de sesion</h2>
                <p>¿Aún no tienes cuenta? <a href="#" className="login__link">Crear cuenta</a></p>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type='email' name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <a href="#" className="login__link">Olvidé mi contraseña</a>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <button type="submit" className="login-button">Iniciar Sesion</button>
                <div className="divider">
                    <p>o sino</p>
                    <div className="social-networks">
                        <button>Ingresar con google</button>
                        <button>Ingresar con facebook</button>
                    </div>
                </div>
            </div>
            
        </form>
    )
}

export default LoginForm;