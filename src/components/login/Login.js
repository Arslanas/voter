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

    return <div className={'flex justify-center'}>
        <div className={'flex flex-col h-screen justify-center items-center gap-y-20'}>
            <h1 className={'text-blue-600 text-6xl font-bold'}>Choose your profile</h1>
            {/*<div className={'flex flex-wrap gap-10 '}>*/}
            <div className={'grid grid-cols-3  gap-16 '}>
                {profiles.map(it =><Button key={it} onClick={()=> setUserHandler(it)} text={it}/>)}
            </div>
        </div>

    </div>;
}

const Button = ({onClick, text})=>{
    return <button className={'bg-blue-600 hover:bg-blue-800 text-white font-bold text-xl py-4 px-8 rounded-lg'}
        onClick={onClick}>{text}</button>
}

export default Login;
