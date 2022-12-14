import { withRouter } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
const Detailuser = (props) => {
    const [user, setUser] = useState([])
    useEffect(async () => {
        let id = props.match.params.id
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        let datauser = res && res.data.data ? res.data.data : [];
        setUser(datauser)
        console.log('check id:', res)
    }, [])
    console.log('check props', props)
    return (
        <>
            <div> User</div>
            <span>{user.id}</span>
            <span>{user.first_name} {user.last_name}</span>
            <span>{user.email}</span>
            <div>
                <img src={user.avatar} />
            </div>
        </>
    )
}
export default withRouter(Detailuser); 