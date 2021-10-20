import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import './Principal.css'


export default function Principal(props){
    
    return(
        <>
            <Header/>
            <Main>
                {props.children}
            </Main>  
            <Footer/>
        </>
    )
}