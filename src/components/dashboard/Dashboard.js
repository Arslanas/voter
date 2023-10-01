import Center from "../common/Center";
import StartNewRoundButton from "../common/StartNewRoundButton";
import {useEffect} from "react";

const Dashboard = ({user, data, goToStoryPoints}) => {

    const groupByPointsAndRole = (role) =>{
        return Object.keys(data)
            .filter(username => data[username].role === role)
            .reduce((group, name) => {
                const userData = data[name]
                const point = userData.point
                if (!point) {
                    group.missing = group.missing || []
                    group.missing.push(name)
                    return group
                }
                group[point] = group[point] || []
                group[point].push(name)
                return group
            }, {})
    }

    const devGroup = groupByPointsAndRole('dev')

    const qaGroup = groupByPointsAndRole('qa')

    useEffect(() => {
        if (!data[user].point) goToStoryPoints()
    }, [data])


    return <Center>

        {data &&
            <div className={'flex flex-col items-center'}>


            <div className={'flex gap-20'}>
                <div>
                    <h1 className={'text-center text-4xl mb-6 font-bold text-blue-500'}>DEV</h1>
                    <table className="min-w-full divide-y divide-gray-200 mb-16">
                        <thead>
                        <tr>
                            <td className="px-6 py-3 bg-blue-500  text-xl  uppercase text-white text-center">Point</td>
                            <td className="px-6 py-3 bg-blue-500  text-xl  uppercase text-white text-center">Users</td>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(devGroup).map(point => {
                            const users = devGroup[point]
                            return <tr key={point}>
                                <td className="px-6 py-4 border-b border-blue-300 text-2xl font-bold  text-blue-400 text-center ">
                                    {'missing' === point ? 'No points' : point}
                                </td>
                                <td className="px-6 py-4 border-b border-blue-300 text-xl font-bold text-blue-300">
                                    <ul>
                                        {users.map(user => <li key={user}>{user}</li>)}
                                    </ul>
                                </td>
                            </tr>
                        })}
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
                <div>
                    <h1 className={'text-center text-4xl mb-6 font-bold text-blue-500'}>QA</h1>
                    <table className="min-w-full divide-y divide-gray-200 mb-16">
                        <thead>
                        <tr>
                            <td className="px-6 py-3 bg-blue-500  text-xl  uppercase text-white text-center">Point</td>
                            <td className="px-6 py-3 bg-blue-500  text-xl  uppercase text-white text-center">Users</td>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(qaGroup).map(point => {
                            const users = qaGroup[point]
                            return <tr key={point}>
                                <td className="px-6 py-4 border-b border-blue-300 text-2xl font-bold  text-blue-400 text-center ">
                                    {'missing' === point ? 'No points' : point}
                                </td>
                                <td className="px-6 py-4 border-b border-blue-300 text-xl font-bold text-blue-300">
                                    <ul>
                                        {users.map(user => <li key={user}>{user}</li>)}
                                    </ul>
                                </td>
                            </tr>
                        })}
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
            <StartNewRoundButton goToNext={goToStoryPoints}/>
            </div>

        }
    </Center>;
}

export default Dashboard;
