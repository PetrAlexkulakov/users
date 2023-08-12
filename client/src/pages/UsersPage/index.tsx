import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { User } from '../../interfaces/user'
import { handleExecute, OperationType } from '../../share/executeFunctions';
import { formatDateFromString } from '../../share/fromatDate';
import { UserContext, defaultLoggedUser } from '../../share/UserContext';
import { useNavigate } from 'react-router-dom';

const UsersPage = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
    const { LoggedUser, setLoggedUser } = useContext(UserContext);
    const navigate = useNavigate()

    useEffect(() => {
      axios.get("http://localhost:3001/users").then((response) => {
        setListOfUsers(response.data) 
      })  
    }, [])

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setSelectedCheckboxes([...selectedCheckboxes, e.target.id]);
      } else {
        setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== e.target.id));
      }
    };

    const handleButtonClick = async (operation: OperationType) => {
      function unLogeUser() {
        setLoggedUser(defaultLoggedUser);
        navigate("/login")
      }
      const user = (await axios.get(`http://localhost:3001/users/${LoggedUser.id}`)).data
      if (user.status === 'active') {
        await handleExecute(selectedCheckboxes, operation)
      } else {
        unLogeUser()
      }
      if(selectedCheckboxes.includes(String(LoggedUser.id)) && operation !== OperationType.Unblock) {
        unLogeUser()
      }
      setSelectedCheckboxes([])
      axios.get("http://localhost:3001/users").then((response) => {
        setListOfUsers(response.data);
      });
    }
  
    return (
      <>
        <div className="d-flex align-items-center justify-content-center m-2 gap-1">
        <button onClick={() => handleButtonClick(OperationType.Block)} className="btn border-primary">Block</button>
        <button onClick={() => handleButtonClick(OperationType.Unblock)} className="btn border-primary">Unblock</button>
        <button onClick={() => handleButtonClick(OperationType.Delete)} className="btn border-primary">Delete</button>
        </div>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th><input type="checkbox" name="" id="" /></th>
              <th>Id</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Last Login Time</th>
              <th>Registration Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {listOfUsers.map((value: User, key) => {
              return (
                <tr key={key}>
                    <td>
                      <input type="checkbox" 
                        name={value.email} 
                        id={value.id} 
                        checked={selectedCheckboxes.includes(String(value.id))} 
                        onChange={e => handleCheckboxChange(e)} />
                    </td>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.lastLoginTime}</td>
                    <td>{formatDateFromString(value.createdAt)}</td>
                    <td>{value.status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
}

export default UsersPage
