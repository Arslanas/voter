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

    const dataResetHandler = () => fetch("/api/reset", {method:'POST'})

    useEffect(()=>{
        if (isSubscribed.current) return
        isSubscribed.current = true

        const events = new EventSource(IS_DEV ? 'http://localhost:3001/api/subscribe' : 'api/subscribe');
        events.onmessage = (event) => setData(JSON.parse(event.data))
    }, [])


    return <div>
        {stage === 1 && <Login setUserHandler={setUser} goToNextStage={()=>setStage(10)}/>}

        {stage === 10 &&  <StoryPointsPoller user={user} goToNextStage={()=>setStage(20)}/>}

        {stage === 20 && <Dashboard data={data}/>}
        {/*<button onClick={dataResetHandler}>Clear all story points</button>*/}
    </div>
}

export default Root;
