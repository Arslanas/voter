import {useEffect, useState} from "react";
import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";
import StoryPointsPoller from "../polling/StoryPointsPoller";
import {useRef} from "react";
import {IS_DEV} from "../../util/Config";

const Root = () => {

    const [user, setUser] = useState('')
    const [data, setData] = useState()
    const [stage, setStage] = useState(1)
    const isSubscribed = useRef(false);

    const stages = {
        'LOGIN' : 1,
        'STORY_POINT' : 2,
        'DASHBOARD' : 3,
    }

    const goToStoryPoint = ()=>setStage(stages.STORY_POINT)
    const goToDashboard = ()=>setStage(stages.DASHBOARD)


    useEffect(()=>{
        if (isSubscribed.current || !user) return
        isSubscribed.current = true

        const events = new EventSource(IS_DEV ? 'http://localhost:3001/api/subscribe' : 'api/subscribe');
        events.onmessage = (event) => setData(JSON.parse(event.data))
    }, [user])


    return <div>
        {stage === stages.LOGIN && <Login setUserHandler={setUser} goToNextStage={goToStoryPoint}/>}

        {stage === stages.STORY_POINT &&  <StoryPointsPoller user={user} data={data} goToNextStage={goToDashboard}/>}

        {stage === stages.DASHBOARD && <Dashboard data={data} goToStoryPoints={goToStoryPoint} user={user}/>}
    </div>
}

export default Root;
