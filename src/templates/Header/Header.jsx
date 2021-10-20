import {Link} from 'react-router-3';

export default function Header(){
    return(
        <header>
            <nav className="menu">
                <div className="icono">
                    <Link to="/"><img src="./img/icono.svg" alt="" /></Link>
                    <h1>InvestiApp</h1>
                </div>
                <ul>
                    <li><Link className="link" to="/projects">Proyectos</Link></li>
                    {/* <li><Link className="link" to="/leaders">Lideres</Link></li> */}
                    <li><Link className="link" to="/students">Usuarios</Link></li>
                </ul>
                <ul>
                    <li>Usuario</li>
                    <li><i class="fas fa-user Header-user-icon"></i></li>
                </ul>
            </nav>
        </header>
        
    )
}