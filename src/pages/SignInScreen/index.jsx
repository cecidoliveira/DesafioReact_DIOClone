import { FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Button, Description, DivForm, DivInfo, DivSingIn, DivTitle, Input, Links, SombraButton, Title } from "./SignInScreenStyles";
import NavBarHome from "../NavBar/NavBarHome"
function SingInScreen() {



  return(
    <>
      <NavBarHome/>

      <DivSingIn>
        <DivTitle>
          <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        </DivTitle>
        <DivInfo>
          <div>
            <Title>Faça seu cadastro</Title>
            <Description>Crie sua conta e make the change._</Description>
          </div>

          <DivForm>
            <div> <HiMail/> <Input type="email" placeholder="E-mail"/> </div>
            <div> <FaLock/> <Input type="password" placeholder="Password"/> </div>

            <div>
              <SombraButton><Button>Entrar</Button></SombraButton>
            </div>
          </DivForm>

          <div>
            <Links>Esqueci minha senha</Links>
            <Links $createacess href="/cadastro">Criar conta</Links>
          </div>
        </DivInfo>
      </DivSingIn>
    </>
  );
}

export default SingInScreen
