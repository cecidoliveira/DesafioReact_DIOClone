import { DivAvatar, DivBar, DivInfo, DivRanking, Title } from "./RankingStyles";

function Rankings() {

    return (
        <DivRanking>
            <DivAvatar src="https://avatars.githubusercontent.com/u/108581198?v=4"></DivAvatar>
            <DivInfo>
                <Title>Cecidoliveira</Title>
                <DivBar><DivBar $percent></DivBar></DivBar>
            </DivInfo>
        </DivRanking>
    );
}

export default Rankings;