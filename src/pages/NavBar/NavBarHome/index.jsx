
import logo from "../../../assets/logo-dio.png"
import { DivNavBar, DivNavUserHome, Buttons } from "../NavBarStyles";
import { useNavigate  } from "react-router-dom";
function NavBarHome() {
    const navigate = useNavigate();

    return (
        <DivNavBar>
            <DivNavUserHome>
                <img src={logo} alt="logo Dio"  onClick={()=> {navigate('/')}}/>
            </DivNavUserHome>
    
            <div>
                <Buttons href="/">Home</Buttons>
                <Buttons $select href="/login">Entrar</Buttons>
                <Buttons $select href="/cadastro">Cadastrar</Buttons>
            </div> 
            
        </DivNavBar>
        );
}

export default NavBarHome;