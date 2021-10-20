import { useQuery } from '@apollo/client'
import { GET_LEADERS } from '../../graphql/leaders'

import '../Leaders/Leaders.css'

export default function Leaders(props){

    const {loading ,data} = useQuery(GET_LEADERS);

    function renderLeaders (){
        return data.leaders.map((lead) =>{
            return <tr className="leaders">
                    <th className='th-edition'><div className='user-icon-leaders'><i class="fas fa-user user-icon-leaders"></i></div></th>
                    <th className='th-edition'> {lead.name}</th>
                    <th className='th-edition'>350685454</th>
                    <th className='th-edition'><div className='div-icons'><i class="far fa-edit icon-bar user-icon-leaders"></i></div></th>
                    <th className='th-edition'><div className='div-icons'><i class="far fa-trash-alt icon-bar user-icon-leaders"></i></div></th>
                </tr>
        })
        
    }

    if (props.vista=="nuevo"){
        return(
            <>
                <article className="agregar-proyecto">
                 <p>Lideres</p>
                 <form action="">
                     <label htmlFor="titulo">Nombre:</label>
                     <input className="titulo" type="text" />

                     <label htmlFor="titulo">Celular:</label>
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
                <article className="editar-proyecto">                            
                <p>Lideres registrados</p>
                <form className="buscar" action="">
                    <input type="text" placeholder="Nombre del Lider"/><button className='search-button' >Buscar</button>
                </form>

                
                <table className='Leaders-table'>
                    <tr className="leaders">
                        <th className='th-edition'></th>
                        <th className='th-edition'> Nombre</th>
                        <th className='th-edition'> Telefono</th>
                        <th className='th-edition'>Editar</th>
                        <th className='th-edition'>borrar</th>
                    </tr>
                    <tr className="leaders">
                        <th className='th-edition'><div className='user-icon-leaders'><i class="fas fa-user user-icon-leaders"></i></div></th>
                        <th className='th-edition'> Carlos Julio Santo Domingo</th>
                        <th className='th-edition'>350685454</th>
                        <th className='th-edition'><div className='div-icons'><i class="far fa-edit icon-bar user-icon-leaders"></i></div></th>
                        <th className='th-edition'><div className='div-icons'><i class="far fa-trash-alt icon-bar user-icon-leaders"></i></div></th>
                    </tr>
                    <tr className="leaders">
                        <th className='th-edition'><div className='user-icon-leaders'><i class="fas fa-user user-icon-leaders"></i></div></th>
                        <th className='th-edition'> Carlos Julio Santo Domingo</th>
                        <th className='th-edition'>350685454</th>
                        <th className='th-edition'><div className='div-icons'><i class="far fa-edit icon-bar user-icon-leaders"></i></div></th>
                        <th className='th-edition'><div className='div-icons'><i class="far fa-trash-alt icon-bar user-icon-leaders"></i></div></th>
                    </tr>
                    <tr>
                        {renderLeaders()}
                    </tr>

                </table>
                          
            </article>
            </>
        )
    }
    else{
        return(
            <>
                <article className="editar-proyecto">                            
                    <p>Proyectos registrados</p>
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






// aqui empieza el complemento

<>
            
            
             <article className="editar-proyecto">
                 <p>Proyectos registrados</p>
                 <form className="buscar" action="">
                     <input type="text" placeholder="Nombre del proyecto"/><button  >Buscar</button>
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