import logo from "../../../assets/logo-dio.png"
import { DivNavBar, DivNavUserHome, DivSearch, AvatarCircle, DivNavUserAvatar, Buttons } from "../NavBarStyles";
import { BiChevronDown, BiSearchAlt } from "react-icons/bi";

function NavBarLogin() {

    return (
        <DivNavBar>
            <DivNavUserHome>
                <img src={logo} alt="logo Dio" />
                <div>
                    <DivSearch><BiSearchAlt/> Pesquisar</DivSearch>
                </div>
                <div>
                    <Buttons>Live Code</Buttons>
                    <Buttons>Global</Buttons>
                </div>
            </DivNavUserHome>
    
            <DivNavUserAvatar>
                <AvatarCircle></AvatarCircle>
                <BiChevronDown/>
            </DivNavUserAvatar>
        </DivNavBar>
    );
}

export default NavBarLogin;