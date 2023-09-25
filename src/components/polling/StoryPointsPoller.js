const StoryPointsPoller = ({user}) => {

    const storyPoints = [1, 2, 3, 5, 8, 13, 21]

    const poller = (storyPoint) => {
        const data = {user: user, point: storyPoint}
        fetch('/api/vote', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(()=>{
            console.log('Voted')
        })
    }


    return <div>
        <h1>{user}, please pick your story points for current Jira</h1>
        <ul>
            {storyPoints.map(sp => <li key={sp}><button onClick={()=>poller(sp)}>{sp}</button></li>)}
        </ul>
    </div>;
}

export default StoryPointsPoller;
