import './App.css';
import {useEffect, useState} from "react";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import StoryPointsPoller from "./components/polling/StoryPointsPoller";

const App = ()=> {

    const [user, setUser] = useState('')
    const [data, setData] = useState()

    const dataFetchHandler = () => fetch("/api")
        .then(res => res.json())
        .then(data => setData(data.map))

    const dataResetHandler = () => fetch("/api/reset", {method:'POST'})

    useEffect(()=>{
        dataFetchHandler()
    }, [])


    return <div>
        {!user && <Login setUserHandler={setUser}/>}
        {user && data && <StoryPointsPoller user={user} dataFetchHandler={dataFetchHandler}/>}

        <button onClick={dataFetchHandler}>Refresh</button>
        <button onClick={dataResetHandler}>Start new Jira voting</button>
        {user && <Dashboard data={data}/>}
    </div>
}

export default App;
