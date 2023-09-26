import {useEffect, useState} from "react";
import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";
import StoryPointsPoller from "../polling/StoryPointsPoller";
import {useRef} from "react";
import {IS_DEV} from "../../util/Config";

const Root = () => {

    const [user, setUser] = useState('')
    const [data, setData] = useState()
    const isSubscribed = useRef(false);

    const dataResetHandler = () => fetch("/api/reset", {method:'POST'})

    useEffect(()=>{
        if (isSubscribed.current) return
        isSubscribed.current = true

        const events = new EventSource(IS_DEV ? 'http://localhost:3001/api/subscribe' : 'api/subscribe');
        events.onmessage = (event) => setData(JSON.parse(event.data))
    }, [])


    return <div>
        {!user && <Login setUserHandler={setUser}/>}
        {/*{user &&  <StoryPointsPoller user={user}/>}*/}

        {/*{data && <Dashboard data={data}/>}*/}
        {/*<br></br>*/}
        {/*<br></br>*/}
        {/*<br></br>*/}
        {/*<button onClick={dataResetHandler}>Start new Jira voting</button>*/}
    </div>
}

export default Root;
