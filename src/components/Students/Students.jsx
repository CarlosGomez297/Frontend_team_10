import { useQuery } from '@apollo/client'
import { GET_USERS } from '../../graphql/users'


import '../Students/Students.css'

export default function Students(props){

    const {loading ,data} = useQuery(GET_USERS);

    if(loading){
        return <h1>Loading.........</h1>
    }
   
        function renderUsers (){
            return data.users.map((users) =>{
                
                return <tr>
                    <th className='th-edition'><div className='user-icon-leaders'><i class="fas fa-user user-icon-leaders"></i></div></th>
                    <th className='th-edition'>{users.name}</th>
                    <th className='th-edition'>{users.role}</th>
                    <th className='th-edition'>{users.email}</th>
                    <th className='th-edition'><div><i class="far fa-edit"></i></div></th>
                    <th className='th-edition'><div><i class="far fa-trash-alt"></i></div></th>
                </tr>
                
            })
            
        }





    if (props.vista=="nuevo"){
        return(
            <>
                <article className="agregar-proyecto">
                 <p>Agregar nuevo usuario</p>
                 <form action="">
                     <label htmlFor="titulo">Nombre:</label>
                     <input className="titulo" type="text" />

                     <label htmlFor="titulo">Rol::</label>
                     <input className="titulo" type="text" />

                     <label htmlFor="titulo">Email:</label>
                     <input className="titulo" type="text" />

                     <button className='search-button'>Enviar</button>
                 </form>
             </article>        
            </>
        )  
    }else if(props.vista=="buscar"){
        return(
            <>

            { loading ? <p>cargando...</p>: <article className="editar-proyecto">                            
        <p>Usuarios registrados</p>
        <form className="buscar" action="">
            <input type="text" placeholder="Nombre del usuario"/><button >Buscar</button>
        </form>
        </article>}
                <table className='Leaders-table'>
                    <tr className="leaders">
                        <th className='th-edition'></th>
                        <th className='th-edition'> Nombre</th>
                        <th className='th-edition'> Rol</th>
                        <th className='th-edition'> Correo</th>
                        <th className='th-edition'>Editar</th>
                        <th className='th-edition'>borrar</th>
                    </tr>
                    {renderUsers()}
                </table>
               
            </>
        )
    }
    else{
        return(
            <>
                <article className="editar-proyecto">                            
                    <p>Usuario a editar</p>
                    <form className="buscar" action="">
                        <input type="text" placeholder="Nombre del proyecto"/><button >Buscar</button>
                    </form>
                    <ul>
                        <li className="proyectos">
                            <p>Administracion de recursos</p>
                            <div>
                                <i class="far fa-edit"></i>
                                <i class="far fa-trash-alt"></i>
                            </div>
                        </li>
                        <li className="proyectos">
                            <p>Energias renovables</p>
                            <div>
                                <i class="far fa-edit"></i>
                                <i class="far fa-trash-alt"></i>
                            </div>
                        </li>
                    </ul>                          
                </article>
            </>
            )
        }

}
