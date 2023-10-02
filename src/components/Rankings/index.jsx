import { DivAvatar, DivBar, DivInfo, DivRanking, Title } from "./RankingStyles";

function Rankings() {

    return (
        <DivRanking>
            <DivAvatar></DivAvatar>
            <DivInfo>
                <Title>Cecidoliveira</Title>
                <DivBar><DivBar $percent></DivBar></DivBar>
            </DivInfo>
        </DivRanking>
    );
}

export default Rankings;