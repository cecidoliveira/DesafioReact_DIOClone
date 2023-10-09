import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { ChakraProvider, useToast  } from '@chakra-ui/react'

import { FaUserAlt, FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Button, Description, DivForm, DivInfo, DivSingUp, DivTitle, Input, SombraButton, Title } from "./SingUpScreenStyles";
import NavBarHome from "../NavBar/NavBarHome"


function SingUpScreen() {
  const navigate = useNavigate();
  const toast = useToast()

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(nome != '' && email != '' && password != ''){
      if(localStorage.getItem(`${email}`) == null){
        const formData = JSON.stringify({ nome: nome, email: email, passwd: password });
        localStorage.setItem(`${email}`, formData);
        toast({
          title: 'usuario cadastrado',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }else{
        toast({
          title: 'email informado ja cadastrado',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }  
    }else{
      toast({
        title: 'preencha todas as informações',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return(
    <ChakraProvider>
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
            <form onSubmit={handleSubmit}>
              <div> <FaUserAlt/> <Input type="text" placeholder="Nome completo" value={nome || ''} onChange={(e) => setNome(e.target.value)} /> </div>
              <div> <HiMail/> <Input type="email" placeholder="E-mail" value={email || ''} onChange={(e) => setEmail(e.target.value)}/> </div>
              <div> <FaLock/> <Input type="password" placeholder="Password" value={password || ''} onChange={(e) => setPassword(e.target.value)}/> </div>

              <div>
                <SombraButton><Button type="Submit" value="Criar minha conta"/></SombraButton>
              </div>
            </form>
          </DivForm>

          <div>
            <Description $terms>Ao clicar em "criar minha conta grátis", declaro que aceito as <span>Políticas de Privacidade</span> e os <span>Termos de Uso</span> da DIO.</Description>
            <Description $link>Já tenho conta. <span onClick={()=> {navigate('/login')}}>Fazer login</span></Description>
          </div>
        </DivInfo>
      </DivSingUp>
    </ChakraProvider>
  );
}

export default SingUpScreen
