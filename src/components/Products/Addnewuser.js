import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap"
import axios from "axios";
const Addnewuser = (props) => {
    const [addemail, setEmail] = useState('nh11b.l99@gmail.com')
    const [adduser, setAdduser] = useState('');
    const [addJob, setAddjob] = useState('');
    const [show, setShow] = useState(false);
    const handleAdduser = (event) => {
        let newuser = event.target.value
        setAdduser(newuser)
    }
    const handleAddjob = (event) => {
        let newjob = event.target.value
        setAddjob(newjob)
    }
    const handleAddnew = async () => {
        if (adduser && addJob) {
            setShow(!show)
            let data = {
                first_name: 'Trung',
                last_name: 'Nguyễn',
                email: addemail,
                name: adduser,
                job: addJob
            }
            let res = await axios.post('https://reqres.in/api/users', data)
            console.log("check add: ", res)
            props.Adduser(res,false)
        } else {
            alert("Please add info")
        }

    }
    return (
        <>
            <Modal.Body>
                <div className="add-form">
                    Name: <input type={"text"} value={adduser}
                        onChange={(event) => handleAdduser(event)}
                    />
                    Job: <input type={"text"} value={addJob}
                        onChange={(event) => handleAddjob(event)}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => handleAddnew()}>
                    Save
                </Button>
            </Modal.Footer>
        </>
    )
}
export default Addnewuser