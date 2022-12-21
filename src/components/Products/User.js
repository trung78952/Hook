import { useEffect, useState } from "react"
import axios from "axios"
import './user.scss'
import { withRouter } from "react-router-dom"
import Modal from 'react-bootstrap/Modal'
import { Button, Table } from "react-bootstrap"
import Addnewuser from "./Addnewuser"
const User = (props) => {
    const [user, setUser] = useState([])
    const [show, setShow] = useState(false);

    useEffect(async () => {
        let arr = await axios.get('https://reqres.in/api/users?page=1')
        let datauser = arr && arr.data.data ? arr.data.data : [];
        setUser(datauser);
        console.log("check user: ", user);
    }, [])
    const handleUser = (id) => {
       
        props.history.push(`/user/${id}`)
        console.log('check props: ', props.history)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdduser = (data,show) => {
        console.log("check data ", data.data)
        setShow(show)
        setUser([...user,data.data])
    }
    return (
        <><div>
            <Button variant="primary" onClick={handleShow}>
                +Add user
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add user</Modal.Title>
                </Modal.Header>
                <Addnewuser
                    Adduser={handleAdduser}
                />
            </Modal>
        </div>
            <div className="user-layout">
                <h3>User list</h3>
                <div className="table-list">
                    <Table striped bordered hover variant="dark">
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
                                            <th>{item.id}</th>
                                            <th>{item.first_name}</th>
                                            <th>{item.last_name}</th>
                                            <th>{item.email}</th>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </Table>
                </div>
            </div>
        </>
    )
}
export default withRouter(User) 