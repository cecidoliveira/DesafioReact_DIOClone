import logo from "../../../assets/logo-dio.png"
import { DivNavBar, DivNavUserHome, DivSearch, AvatarCircle, DivNavUserAvatar, Buttons } from "../NavBarStyles";
import { BiChevronDown, BiSearchAlt } from "react-icons/bi";
import { useNavigate  } from "react-router-dom";
function NavBarLogin() {
    const navigate = useNavigate();

    return (
        <DivNavBar>
            <DivNavUserHome>
                <img src={logo} alt="logo Dio"  onClick={()=> {navigate('/')}}/>
                <div>
                    <DivSearch><BiSearchAlt/> Pesquisar</DivSearch>
                </div>
                <div>
                    <Buttons>Live Code</Buttons>
                    <Buttons>Global</Buttons>
                </div>
            </DivNavUserHome>
    
            <DivNavUserAvatar>
                <AvatarCircle src="https://avatars.githubusercontent.com/u/108581198?v=4"></AvatarCircle>
                <BiChevronDown/>
            </DivNavUserAvatar>
        </DivNavBar>
    );
}

export default NavBarLogin;