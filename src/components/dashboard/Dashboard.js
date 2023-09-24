import {useEffect, useState} from "react";

const Login = ({data}) => {

    return <div>

        {data &&
            <table>
                <thead>
                <th>User</th>
                <th>Point</th>
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

export default Login;
