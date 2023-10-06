import Center from "../common/Center";
import Button from "../common/Button";
import {POST} from "../repository/Api";

const StoryPointsPoller = ({user}) => {

    const storyPoints = [1, 2, 3, 5, 8, 13, 21]

    const poller = (storyPoint) => {
        POST('/api/vote', {user: user, point: storyPoint})
    }


    return <Center>
        <h1 className={'text-2xl text-blue-400 font-bold mb-10'}>{user}, please pick your story points for current
            Jira</h1>
        <div className={'flex gap-10 '}>
            {storyPoints.map(sp => <Button key={sp} onClick={() => poller(sp)} text={sp}/>)}
        </div>
    </Center>
}

export default StoryPointsPoller;
