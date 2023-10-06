import Center from "../common/Center";
import StartNewRoundButton from "../common/StartNewRoundButton";

const Dashboard = ({data, user}) => {

    const groupByPointsAndRole = (role) => {
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


    return <Center>

        {data &&
            <div className={'flex flex-col items-center'}>
                <div className={'flex gap-20'}>
                    <DashboardTable title={'DEV'} group={devGroup} color={'text-sky-400'}></DashboardTable>
                    <DashboardTable title={'QA'} group={qaGroup} color={'text-cyan-400'}></DashboardTable>
                </div>
                <StartNewRoundButton user={user}/>
            </div>

        }
    </Center>;
}

const DashboardTable = ({title, group, color}) => <div>
    <h1 className={`text-center text-4xl mb-6 font-bold ${color} drop-shadow-md`}>{title}</h1>
    <table className="min-w-full mb-16">
        <tbody>
        {Object.keys(group).map(point => {
            const users = group[point]
            return <tr key={point}>
                <td className={`px-6 py-4 border-b  text-2xl font-bold  ${color} text-center`}>
                    {'missing' === point ? '_' : point}
                </td>
                <td className={`px-6 py-4 border-b  text-xl font-bold ${color}`}>
                    <ul>
                        {users.map(user => <li key={user}>{user}</li>)}
                    </ul>
                </td>
            </tr>
        })}
        </tbody>
    </table>
</div>


export default Dashboard;
