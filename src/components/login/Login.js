import {useState} from "react";
import Center from "../common/Center";

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
            <h1 className={'text-blue-600 text-6xl font-bold mb-32'}>Choose your profile</h1>
            <div className={'grid grid-cols-3  gap-16 '}>
                {profiles.map(it =><button key={it}
                                           className={'bg-blue-600 hover:bg-blue-800 text-white font-bold text-xl py-4 px-8 rounded-lg'}
                                           onClick={()=> clickUserHandler(it)}>{it}</button>)}
            </div>

    </Center>;
}

export default Login;
