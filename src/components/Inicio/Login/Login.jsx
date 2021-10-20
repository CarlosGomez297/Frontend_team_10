import '../Inicio.css';

import {useEffect } from "react"

export default function Login(){


      /*fetch('http://localhost:8080/users/buscar/Pedri')
      .then((response)=>{
           return response.json()
      })
      .then((data)=>{
            console.log(data);
      })*/
            
    

    return(
        <div className="login">
            <form className="ingresar">
                <div className="titulo">
                    <h2>Bienvenido</h2>
                    <p>Iniciar sesión</p>
                </div>
                
                <label htmlFor="usuario">Usuario:</label>
                <input className="usuario" type="text" placeholder="Ingrese su usuario"/>
                <label htmlFor="password">Contraseña:</label>
                <input className="password" type="password" placeholder="Ingrese su contraseña"/>

                <div>
                    <button className="enviar" type="submit">Entrar</button>
                    <a href="#">Olvide mi contraseña</a>
                </div>
                
            </form>
        </div>
    )
}