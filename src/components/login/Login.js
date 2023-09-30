import {useState} from "react";
import Center from "../common/Center";
import Button from "../common/Button";

const Login = ({setUserHandler, goToNextStage}) => {

    const [profiles, setProfiles] = useState([
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

    const clickUserHandler = (user)=>{
        setUserHandler(user)
        goToNextStage()
    }

    return <Center>
            <h1 className={'text-blue-400 text-6xl font-bold mb-32'}>Choose your profile</h1>
            <div className={'grid grid-cols-3  gap-16 '}>
                {profiles.map(it =><Button key={it} onClick={()=> clickUserHandler(it)} text={it}/>)}
            </div>

    </Center>;
}

export default Login;
