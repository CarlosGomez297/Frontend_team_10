import '../Inicio.css'

import Swal from 'sweetalert2'

function Nav(){

    const contatenosClick = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'En el momentos no podemos atenderte!',
            footer: 'Intenta mas tarde'
          })
       }

    const nuevoUsuarioClick = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Servicio exclusivo solo para presonal uatorizado',
            footer: 'Ponte en contacto con el administrador'
          })
       }

    return(
        <nav className="barra-navegacion">
            <div className="logo">
                <img className="app-icono"src="./img/icono.svg" alt="logo" />
                <h1 className="app-nombre">InvestiApp</h1>
            </div>
            <ul className="list-inicio">
                <li> <a  href="#" onClick={contatenosClick}>Contactanos</a> </li>
                <li> <a  href="#" onClick={nuevoUsuarioClick}>¿Usuario nuevo?</a> </li>
            </ul>
        </nav>
    )
}

export default Nav;