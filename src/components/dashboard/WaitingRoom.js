import "./WaitingRoom.css";
import Center from "../common/Center";
import {useEffect} from "react";
import Button from "../common/Button";

const WaitingRoom = ({user, data, goToPrevStage, goToNextStage}) => {

    useEffect(() => {
        if (!data[user].point) goToPrevStage()
    }, [data])

    const userColor = (username) => data[username].point ? 'text-blue-400' : 'text-slate-300'
    // const userText = (username) => data[username].point ?<AiFillCheckCircle color='blue' size={'50'}/> : username

    return <Center>

        <div className={'flex gap-40'}>
            <div className={'flex flex-col items-center gap-4 mb-10'}>
                <h1 className={'text-4xl font-bold text-blue-400 mb-16'}>Please wait for all votes</h1>
                <div className={'flex flex-col gap-4 justify-around'}>
                    {Object.keys(data).sort().map(username =>
                        data[username].point ?
                            <VotedUser username={username}/> :
                            <NotVotedUser username={username}/>
                    )}
                </div>

            </div>
        </div>
        <Button onClick={goToNextStage} text={'Force show dashboard for all'}/>
    </Center>;
}

export default WaitingRoom;


const VotedUser = ({username})=>{
    return <div key={username}  className={`flex items-center gap-2 voteAnim` }>
        <p className={`text-xl font-bold text-blue-400`}>{username}</p>
    </div>

}
const NotVotedUser = ({username})=>{
    return <div key={username}  className={'flex items-center gap-2' }>
        <p className={`text-xl font-bold text-slate-300`}>{username}</p>
    </div>
}
