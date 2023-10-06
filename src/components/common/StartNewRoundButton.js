import Button from "./Button";
import {POST} from "../repository/Api";

const StartNewRoundButton = ({user}) => {

    const dataResetHandler = () => POST("/api/new-round", {user: user})


    return <Button onClick={dataResetHandler} text={'Start new round'}/>;
}

export default StartNewRoundButton;
