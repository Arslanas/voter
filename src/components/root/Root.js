import {useEffect, useState} from "react";
import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";
import StoryPointsPoller from "../polling/StoryPointsPoller";
import {useRef} from "react";
import {IS_DEV} from "../../util/Config";
import WaitingRoom from "../dashboard/WaitingRoom";

const Root = () => {

    const [user, setUser] = useState('')
    const [data, setData] = useState()
    const [stage, setStage] = useState(1)
    const isSubscribed = useRef(false);

    const stages = {
        'LOGIN' : 1,
        'STORY_POINT' : 2,
        'WAITING_ROOM' : 3,
        'DASHBOARD' : 4,
    }

    const goToStoryPoint = ()=>setStage(stages.STORY_POINT)
    const goToWaitingRoom = ()=>setStage(stages.WAITING_ROOM)
    const goToDashboard = ()=>setStage(stages.DASHBOARD)


    useEffect(()=>{
        if (isSubscribed.current) return
        isSubscribed.current = true

        const events = new EventSource(IS_DEV ? 'http://localhost:3001/api/subscribe' : 'api/subscribe');
        events.onmessage = (event) => setData(JSON.parse(event.data))
    }, [user])


    return <div>
        {stage === stages.LOGIN && <Login profiles={data?.users ? Object.keys(data.users) : []} setUserHandler={setUser} goToNextStage={goToStoryPoint}/>}

        {stage === stages.STORY_POINT &&  <StoryPointsPoller user={user} data={data?.users} goToNextStage={goToWaitingRoom}/>}

        {stage === stages.WAITING_ROOM && <WaitingRoom data={data?.users} goToNextStage={goToDashboard} user={user}/>}

        {stage === stages.DASHBOARD && <Dashboard data={data?.users} goToStoryPoints={goToStoryPoint} user={user}/>}
    </div>
}

export default Root;
