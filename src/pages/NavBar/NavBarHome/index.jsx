
import logo from "../../../assets/logo-dio.png"
import { DivNavBar, DivNavUserHome, Buttons } from "../NavBarStyles";
function NavBarHome() {

    return (
        <DivNavBar>
            <DivNavUserHome>
                <img src={logo} alt="logo Dio" />
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