import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../../graphql/projects'
import '../Projects/Projects.css'
export default function Projects(props){

    console.log(props.vista)

    const {loading ,data} = useQuery(GET_PROJECTS);

    if(loading){
        return <h1>Loading.........</h1>
    }
   

        function renderProjects (){
            return data.projects.map((proj) =>{
                return <tr>
                <th className='th-edition'><div className='user-icon-leaders'><i class="fas fa-folders user-icon-leaders"></i></div></th>
                <th className='th-edition'>{proj.name}</th>
                <th className='th-edition'>{proj.budget}</th>
                <th className='th-edition'>{proj.description}</th>
                <th className='th-edition'><div><i class="far fa-edit"></i></div></th>
                <th className='th-edition'><div><i class="far fa-trash-alt"></i></div></th>
            </tr>

            })
            
        }



    

    function setProject(){
        return null
    }



if (props.vista=="nuevo"){
    return(
        <>
            <article className="agregar-proyecto">
                <p>Agregar nuevo proyecto</p>
                <form action="">
                    <label htmlFor="titulo">Titulo:</label>
                    <input className="titulo" type="text" />

                    <label htmlFor="descripcion">Descripción:</label>
                    <input className="descripcion" type="textarea" />

                    <label htmlFor="objetivo">Objetivo:</label>
                    <input className="objetivo" type="textarea" />

                    <div className="fecha">
                        <div>
                            <label htmlFor="fecha-inicial">Fecha inical: </label>
                            <input className="fecha-inicio" type="date"  />
                        </div>
                        <div>
                            <label htmlFor="fecha-final">Fecha final: </label>
                            <input className="fecha-final" type="date" />
                        </div>
                    </div>
                            
                    <label htmlFor="presupuesto">Presupuesto:</label>
                    <input className="presupuesto" type="number" placeholder="$"/>

                    <label htmlFor="status">Status:</label>
                    <input className="status" type="text" />

                    <label htmlFor="avances">Avances:</label>
                    <input className="avance" type="text" />

                    <button onClick={() => setProject(null)}>Enviar</button>
                </form>
            </article>        
        </>
    )  
}else if(props.vista=="buscar"){
    return(
        <>
        { loading ? <p>cargando...</p>: <article className="editar-proyecto">                            
        <p>Proyectos registrados</p>
        <form className="buscar" action="">
            <input type="text" placeholder="Nombre del proyecto"/><button >Buscar</button>
        </form>

        <table>
        <tr>
            <th className='th-edition'></th>
            <th className='th-edition'>Nombre del proyecto</th>
            <th className='th-edition'>Presupuesto</th>
            <th className='th-edition'>Descripción</th>
            <th className='th-edition'>Editar</th>
            <th className='th-edition'>Borrar</th>
            </tr>

            {renderProjects()}
        </table>
                          
    </article>}
            
        </>

        
    )
}
else{
    return(
        <>
            <article className="buscar-proyecto">
                <p>Vista en proceso...</p>        
            </article>
        </>
        )
    }
}



// la forma de calcular el valor restante del windows dom

// var restar = (40+74);

// var resultado = window.innerHeight - restar;
// console.log("El resto de la venta es:");
// console.log(resultado);
