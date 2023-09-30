import Center from "../common/Center";
import {useEffect} from "react";
import Button from "../common/Button";

const StoryPointsPoller = ({user, data, goToNextStage}) => {

    const storyPoints = [1, 2, 3, 5, 8, 13, 21]

    const poller = (storyPoint) => {
        const data = {user: user, point: storyPoint}
        fetch('/api/vote', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(()=>{
            console.log('Voted')
            goToNextStage()
        })
    }
    useEffect(()=>{
        if (!data) return
        if (data[user].point) goToNextStage()
    }, [data])


    return <Center>
            <h1 className={'text-4xl text-blue-400 font-bold mb-20'}>{user}, please pick your story points for current Jira</h1>
            <div className={'flex gap-16 '}>
                {storyPoints.map(sp => <Button key={sp} onClick={()=> poller(sp)} text={sp}/>)}
            </div>
    </Center>
}

export default StoryPointsPoller;
