import { useEffect, useState } from "react"
import axios from "axios"
import './user.scss'
import { withRouter } from "react-router-dom"
const User = (props) => {
    const [user, setUser] = useState([])
    useEffect(async () => {
        let arr = await axios.get('https://reqres.in/api/users?page=1')
        let datauser = arr && arr.data.data ? arr.data.data : [];
        setUser(datauser);
        console.log("check user: ", user);
    }, [])
    const handleUser = (id) => {
        props.history.push(`/user/${id}`)
    }
    return (
        <div className="user-layout">
            <h3>User list</h3>
            <table className="table-user">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {user && user.length > 0 &&
                    user.map((item, index) => {
                        return (
                            <tbody key={item.id} >
                                <tr onClick={() => handleUser(item.id)}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default withRouter(User) 