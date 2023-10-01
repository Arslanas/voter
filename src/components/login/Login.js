import Center from "../common/Center";
import Button from "../common/Button";

const Login = ({profiles, setUserHandler}) => {

    return <Center>
            <h1 className={'text-blue-400 text-4xl font-bold mb-20'}>Choose your profile</h1>
            <div className={'grid grid-cols-3  gap-10 '}>
                {profiles.sort().map(it =><Button key={it} onClick={()=> setUserHandler(it)} text={it}/>)}
            </div>

    </Center>;
}

export default Login;
