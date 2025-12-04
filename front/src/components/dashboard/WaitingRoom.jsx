import "./WaitingRoom.css";
import Center from "../common/Center";
import Button from "../common/Button";

const WaitingRoom = ({user, data, showDashboardHandler}) => {

    return <Center>

        <div className={'flex gap-10'}>
            <div className={'flex flex-col items-center gap-4 mb-10'}>
                <h1 className={'text-3xl font-bold text-sky-500 mb-4 drop-shadow '}>Waiting for all votes</h1>
                <div className={'flex flex-col gap-2 justify-around'}>
                    {Object.keys(data).sort().map(username =>
                        data[username].point ?
                            <VotedUser key={username} username={username}/> :
                            <NotVotedUser key={username} username={username}/>
                    )}
                </div>

            </div>
        </div>
        <Button onClick={()=>showDashboardHandler(user)} text={'Reveal story points'}/>

    </Center>;
}

export default WaitingRoom;


const VotedUser = ({username})=>{
    return <div className={`flex items-center gap-2` }>
        <p className={`text-xl font-bold text-sky-400 voteAnim`}>{username}</p>
    </div>

}
const NotVotedUser = ({username})=>{
    return <div className={'flex items-center gap-2' }>
        <p className={`text-xl font-bold text-slate-300`}>{username}</p>
    </div>
}
