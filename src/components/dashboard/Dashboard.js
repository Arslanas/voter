import Center from "../common/Center";
import StartNewRoundButton from "../common/StartNewRoundButton";
import {useEffect} from "react";
import Waiting from "../common/animation/Waiting";

const Dashboard = ({user, data, goToStoryPoints}) => {
    const groupByPoints = Object.keys(data).reduce((group, name)=> {
        const userData = data[name]
        const point = userData.point
        if (!point){
            group.missing = group.missing || []
            group.missing.push(name)
            return group
        }
        group[point] = group[point] || []
        group[point].push(name)
        return group
    }, {})

    useEffect(()=>{
        if (!data[user].point) goToStoryPoints()
    }, [data])


    return <Center>

        {data &&
            <>
                <table className="min-w-full divide-y divide-gray-200 mb-16">
                    <thead>
                    <tr>
                        <td className="px-6 py-3 bg-blue-500  text-xl  uppercase text-white text-center">Point</td>
                        <td className="px-6 py-3 bg-blue-500  text-xl  uppercase text-white text-center">Users</td>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(groupByPoints).map(point => {
                        const users = groupByPoints[point]
                        return <tr key={point}>
                            <td className="px-6 py-4 border-b border-blue-300 text-2xl font-bold  text-blue-400 text-center ">
                                {'missing' === point ? 'No points' : point}
                            </td>
                            <td className="px-6 py-4 border-b border-blue-300 text-xl font-bold text-blue-300">
                                <ul >
                                    {users.map(user=> <li key={user}>{user}</li>)}
                                </ul>
                            </td>
                        </tr>
                    })}
                    </tbody>
                    <tfoot></tfoot>
                </table>
                <StartNewRoundButton goToNext={goToStoryPoints}/>
            </>

        }
    </Center>;
}

export default Dashboard;
