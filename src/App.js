import './App.css';
import {useState} from "react";
import Login from "./components/login/Login";

function App() {

    const [data, setData] = useState()

    const voteHandler = () => {
        const data = {
            name: 'Arslan', value: 5,
        }
        fetch('/api/vote', {
            method: 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    }

    const dataPollHandler = () => fetch("/api")
            .then(res => res.json())
            .then(data => setData(data.message))

    return (<div>
            <Login/>
            <h1>{data ? data : 'Loading ...'}</h1>
            <button onClick={voteHandler}>Vote</button>
            <button onClick={dataPollHandler}>Refresh</button>
        </div>);
}

export default App;
