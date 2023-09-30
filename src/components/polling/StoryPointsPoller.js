import Center from "../common/Center";
import {useEffect} from "react";

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
            <h1 className={'text-4xl text-blue-700 font-bold mb-20'}>{user}, please pick your story points for current Jira</h1>
            <div className={'flex gap-16 '}>
                {storyPoints.map(sp => <button key={sp}
                    className={'bg-blue-600 hover:bg-blue-800 text-white font-bold text-xl py-4 px-8 rounded-lg'}
                                               onClick={()=> poller(sp)}>{sp}</button>)}
            </div>
    </Center>
}

export default StoryPointsPoller;
