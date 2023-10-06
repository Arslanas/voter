import {useEffect, useState} from "react";
import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";
import StoryPointsPoller from "../polling/StoryPointsPoller";
import {useRef} from "react";
import {IS_DEV} from "../../util/Config";
import WaitingRoom from "../dashboard/WaitingRoom";
import Notification from "./Notification";
import {POST} from "../repository/Api";

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

    const showDashboardHandler = (user)=> POST('/api/show-dashboard', {user: user})

    useEffect(()=>{
        if (isSubscribed.current) return
        isSubscribed.current = true

        const events = new EventSource(IS_DEV ? 'http://localhost:3001/api/subscribe' : 'api/subscribe');
        events.onmessage = (event) => setData(JSON.parse(event.data))
    }, [user])

    useEffect(()=>{
        if (!user) {
            setStage(stages.LOGIN)
            return
        }
        if (data?.isShowDashboard) {
            setStage(stages.DASHBOARD)
            return;
        }
        if (!data.users[user].point) setStage(stages.STORY_POINT)
        if (data.users[user].point) setStage(stages.WAITING_ROOM)

    }, [data, user, stage])


    return <div className={'bg-slate-50 h-screen'}>
        {stage === stages.LOGIN &&
            <Login profiles={data?.users ? Object.keys(data.users) : []} setUserHandler={setUser}/>}

        {stage === stages.STORY_POINT &&
            <StoryPointsPoller user={user} data={data?.users}/>}

        {stage === stages.WAITING_ROOM &&
            <WaitingRoom data={data?.users}
                         user={user}
                         showDashboardHandler={showDashboardHandler}
            />}

        {stage === stages.DASHBOARD &&
            <Dashboard data={data?.users}  user={user}/>}

        {data?.notification &&
            <Notification key={data.notification.action} notification={data.notification}/>}
    </div>
}

export default Root;
