import Center from "../common/Center";
import StartNewRoundButton from "../common/StartNewRoundButton";
import {useEffect} from "react";
import Waiting from "../common/animation/Waiting";
import Button from "../common/Button";

const WaitingRoom = ({user, data, goToNextStage}) => {

    const column = (list, title) => <div className={'flex flex-col items-center gap-4 mb-10'}>
        <h1 className={'text-4xl font-bold text-blue-400 mb-16'}>{title}</h1>
        {list.map(username => <p key={username} className={'text-xl text-blue-300 font-bold'}>{username}</p>)}
    </div>

    return <Center>
        <div className={'flex gap-40'}>
            {column(Object.keys(data).filter(username => !data[username].point), 'Wait points from')}
            {column(Object.keys(data).filter(username => data[username].point), 'Got points from')}
        </div>
        <Button onClick={goToNextStage} text={'Force show dashboard for all'}/>
    </Center>;
}

export default WaitingRoom;
