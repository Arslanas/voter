import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [data, setData] = useState()

    const voteHandler = () => {
        data = {
            name: 'Arslan', value: 5,
        }
        fetch('/api/vote', {method: 'POST', body: JSON.stringify(data)})
    }



    useEffect(() => {
        fetch("/api")
            .then(res => res.json())
            .then(data => setData(data.message))

    })

    return (<div>
            <h1>{data ? data : 'Loading ...'}</h1>
            <button onClick={voteHandler}>Vote</button>
        </div>);
}

export default App;
