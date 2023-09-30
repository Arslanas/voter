import Button from "./Button";

const StartNewRoundButton = ({goToNext}) => {

    const dataResetHandler = () => {
        fetch("/api/reset", {method:'POST'}).then(goToNext)
    }

    return <Button onClick={dataResetHandler} text={'Start new round'}/>;
}

export default StartNewRoundButton;
