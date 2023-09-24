import {useState} from "react";

const Login = ({setUserHandler}) => {

    const [profiles, setData] = useState([
        'Ramesh',
        'Haitang',
        'Feili',
        'Gerrit',
        'Arslan',
        'Sachin',
        'Harsh',
        'Ashwini',
        'Manisha',
        'Richa',
        'Vijay',
    ].sort())

    return <div>
        <h1>Choose your profile</h1>
        <ul>
            {profiles.map(it => <li key={it}><button onClick={()=> setUserHandler(it)}>{it}</button></li>)}
        </ul>
    </div>;
}

export default Login;
