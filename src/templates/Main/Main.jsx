import { useState } from "react";

//import del id
// import uniqueId from 'react-html-id';

import Projects from "../../components/Projects/Projects";
import Leaders from "../../components/Leaders/Leaders";
import Students from "../../components/Students/Students";

export default function Main(props){

    const [vista, setVista] = useState("");
    const [navegacion, setNavegacion] = useState();

    return(
    
          <main >
            <div className="projects">
                <aside>
                    <ul>
                        <li className="boton-nuevo"> <button className="botones" onClick={() => setVista("nuevo")}>Nuevo</button> </li>
                        <li className="boton-buscar"><button className="botones" onClick={() => setVista("buscar")}>Buscar</button></li>
                        {/* <li className="boton-editar"><button className="botones" onClick={() => setVista("editar")}>Editar</button></li> */}
                    </ul>
                </aside>
                <section className='views-container'>
                    {console.log(vista)}
                    {console.log(props.children.props.location.pathname)}
                    {props.children.props.location.pathname=="/projects"?<Projects vista={vista}/>:null}
                    {props.children.props.location.pathname=="/leaders"?<Leaders vista={vista}/>:null}
                    {props.children.props.location.pathname=="/students"?<Students vista={vista}/>:null}

                    {/*<Projects vista={vista}/>*/}

                </section>
            </div>
        </main>
    )
}