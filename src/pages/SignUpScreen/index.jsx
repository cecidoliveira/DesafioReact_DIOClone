import { FaUserAlt, FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Button, Description, DivForm, DivInfo, DivSingUp, DivTitle, Input, SombraButton, Title } from "./SingUpScreenStyles";
import NavBarHome from "../NavBar/NavBarHome"
import { useNavigate  } from "react-router-dom";

function SingUpScreen() {
  const navigate = useNavigate();

  return(
    <>
      <NavBarHome/>
      
      <DivSingUp>
          <DivTitle>
          <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        </DivTitle>
        <DivInfo>
          <div>
            <Title>Comece agora grátis</Title>
            <Description>Crie sua conta e make the change._</Description>
          </div>

          <DivForm>
            <div> <FaUserAlt/> <Input type="text" placeholder="Nome completo"/> </div>
            <div> <HiMail/> <Input type="email" placeholder="E-mail"/> </div>
            <div> <FaLock/> <Input type="password" placeholder="Password"/> </div>

            <div>
              <SombraButton><Button>Criar minha conta</Button></SombraButton>
            </div>
          </DivForm>

          <div>
            <Description $terms>Ao clicar em "criar minha conta grátis", declaro que aceito as <span>Políticas de Privacidade</span> e os <span>Termos de Uso</span> da DIO.</Description>
            <Description $link>Já tenho conta. <span onClick={()=> {navigate('/login')}}>Fazer login</span></Description>
          </div>
        </DivInfo>
      </DivSingUp>
    </>
  );
}

export default SingUpScreen
