import Center from "../common/Center";
import {useEffect} from "react";
import Button from "../common/Button";

const WaitingRoom = ({user, data, goToPrevStage, goToNextStage}) => {

    useEffect(() => {
        if (!data[user].point) goToPrevStage()
    }, [data])

    const userColor = (username) => data[username].point ? 'text-blue-400' : 'text-slate-300'

    return <Center>
        <div className={'flex gap-40'}>
            <div className={'flex flex-col items-center gap-4 mb-10'}>
                <h1 className={'text-4xl font-bold text-blue-400 mb-16'}>Please wait for all votes</h1>
                {Object.keys(data).sort().map(username =>
                    <p key={username} className={`text-xl font-bold ${userColor(username)}`}>{username}</p>)
                }
            </div>
        </div>
        <Button onClick={goToNextStage} text={'Force show dashboard for all'}/>
    </Center>;
}

export default WaitingRoom;
