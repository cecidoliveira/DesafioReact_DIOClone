import Card from "../../components/Card";
import Rankings from "../../components/Rankings";
import { DivLoggedScreen, Title } from "./LoggedScreenStyles";
import NavBarLogin from "../NavBar/NavBarLogin"
function LoggedScreen() {

    return (
        <>
            <NavBarLogin/>

            <DivLoggedScreen>
                <div>
                    <Title $feed>Feed</Title>
                    <Card/>
                    <Card/>
                </div>
                <div>
                    <Title># Ranking 5 Top da semana</Title>
                    <div>
                        <Rankings/>
                        <Rankings/>
                        <Rankings/>
                        <Rankings/>
                    </div>
                </div>
            </DivLoggedScreen>
        </>
    );
}

export default LoggedScreen;