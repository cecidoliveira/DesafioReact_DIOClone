import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import {  ChakraProvider, useToast } from '@chakra-ui/react'

import { FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Button, Description, DivForm, DivInfo, DivSingIn, DivTitle, Input, Links, SombraButton, Title } from "./SignInScreenStyles";
import NavBarHome from "../NavBar/NavBarHome"

function SingInScreen() {
  const navigate = useNavigate();
  const toast = useToast()


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if(localStorage.getItem(`${email}`) != null){
      let user = JSON.parse(localStorage.getItem(`${email}`));
      if (user.passwd == password) {
        navigate('/feed')
      }else {
        toast({
          title: 'usuario ou senha invalidos',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }else{
      toast({
        title: 'email não cadastrado',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }  

  }

  return(
    <ChakraProvider>
      <NavBarHome/>

      <DivSingIn>
        <DivTitle>
          <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        </DivTitle>
        <DivInfo>
            <div>
              <Title>Faça Login</Title>
              <Description>Crie sua conta e make the change._</Description>
            </div>

            <DivForm>
            <form onSubmit={handleSubmit}>
              <div> <HiMail/> <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/> </div>
              <div> <FaLock/> <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/> </div>

              <div>
                <SombraButton><Button type="submit" value="Entrar"/></SombraButton>
              </div>
            </form>
          </DivForm>

          <div>
            <Links>Esqueci minha senha</Links>
            <Links $createacess href="/cadastro">Criar conta</Links>
          </div>
        </DivInfo>
      </DivSingIn>
    </ChakraProvider>
  );
}

export default SingInScreen
