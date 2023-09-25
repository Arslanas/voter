const Dashboard = ({data}) => {

    console.log('Dashboard : ' + data)

    return <div>

        {data &&
            <table>
                <thead>
                <tr>
                    <td>User</td>
                    <td>Point</td>
                </tr>
                </thead>
                <tbody>
                {Object.keys(data).map(user => {
                    const {point} = data[user]
                    return <tr key={user}>
                        <td>{user}</td>
                        <td>{point ? point : 'Not voted yet'}</td>
                    </tr>
                })}
                </tbody>
                <tfoot></tfoot>
            </table>
        }
    </div>;
}

export default Dashboard;
