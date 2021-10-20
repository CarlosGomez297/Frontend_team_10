import Nav from "./Nav/Nav"
import Portada from "./Portada/Portada"
import Login from "./Login/Login"
import './Inicio.css'
export default function Inicio(){
    return(
        <>
            <Nav/>
            <div className="inicio">
                <Portada/>
                <Login/>
            </div>
        </>
    )
}