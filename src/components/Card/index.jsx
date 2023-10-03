import img from "../../assets/img_feed.png"
import { DivAvatar, DivCard, DivImgAvatar, DivInfo, DivInfoAvatar, DivText, Paragraph, Title } from "./CardStyles";


function Card() {

    return (
        <DivCard>
          <img src={img} alt="imagem ilustrativa do feed" />
          <DivInfo>
            <DivAvatar>
                <DivImgAvatar src="https://avatars.githubusercontent.com/u/108581198?v=4"></DivImgAvatar>
                <DivInfoAvatar>
                    <Title>Cecidoliveira</Title>
                    <Paragraph>Há 8 minutos</Paragraph>
                </DivInfoAvatar>
            </DivAvatar>
            <DivText>
               <Title>Projeto para curso de HTML e CSS</Title> 
               <Paragraph>Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <span>Ver Mais</span></Paragraph>
            </DivText>
            <DivText>
                <Paragraph $hastag>#HTML #CSS #Javascript</Paragraph>
            </DivText>
          </DivInfo>  
        </DivCard>
    );
}

export default Card;