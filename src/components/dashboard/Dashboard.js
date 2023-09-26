import Center from "../common/Center";

const Dashboard = ({data}) => {

    console.log(data)

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


    console.log(groupByPoints)


    return <Center>

        {data &&
            <table className="min-w-full divide-y divide-gray-200 bg-gray-100">
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
                        <td className="px-6 py-4 border-b border-blue-300 text-2xl font-bold
                                                            text-blue-500 text-center border-r border-r-blue-300">
                            {'missing' === point ? 'No points' : point}
                        </td>
                        <td className="px-6 py-4 border-b border-blue-300 text-xl font-bold text-blue-500">
                            <ul>
                                {users.map(user=> <li>{user}</li>)}
                            </ul>
                        </td>
                    </tr>
                })}
                </tbody>
                <tfoot></tfoot>
            </table>
        }
    </Center>;
}

export default Dashboard;
