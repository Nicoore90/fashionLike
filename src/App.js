import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {

  const adminUser = {
    email: 'fashion-like@fashion-like.com',
    password: 'fashionLike'
  }

  const [user, setUser] = useState({email: ''});
  const [error, setError] = useState("");

  const login = details => {
    console.log(details)

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Conectado");
      setUser({
        email: details.email
      })
    } else {
      console.log("Los datos no coinciden")
      setError("Los datos no coinciden")
    }
  }

  const logOut = () => {
    console.log('Desconectado')
    setUser({
      email: ""
    })
  }

  return (
    <div className="App">
      {(user.email != '') ? (
        <div className='welcome'>
          <h2>Bienvenido, <span>{user.email}</span></h2>
          <button onClick={logOut}>Cerrar Sesion</button>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
  )
}

export default App;
