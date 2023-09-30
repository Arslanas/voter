const StartNewJiraButton = ({goToNext}) => {

    const dataResetHandler = () => {
        fetch("/api/reset", {method:'POST'}).then(goToNext)
    }

    return <button className={'bg-blue-600 hover:bg-blue-800 text-white font-bold text-xl py-4 px-8 rounded-lg'}
        onClick={dataResetHandler}>Start new Jira</button>;
}

export default StartNewJiraButton;
