import imagem from "../../assets/img-home.png"
import { Button, DivHome, DivText, SombraButton, Text, Title, TitleDestac } from "./HomeScreenStyles";
import NavBarHome from "../NavBar/NavBarHome"
function HomeScreen() {
  return(
    <>
      <NavBarHome/>

      <DivHome>
        <DivText>
            <Title><TitleDestac>Implemente</TitleDestac>o seu futuro global agora!</Title>
            <Text>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</Text>
            <SombraButton><Button href="/login">Começar agora</Button></SombraButton>
        </DivText>

        <div>
            <img src={imagem} alt="imagem de homepage da DIO" />
        </div>
      </DivHome>
    </>
  );
}

export default HomeScreen
