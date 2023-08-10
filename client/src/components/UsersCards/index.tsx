import axios from 'axios'
import { useEffect, useState } from 'react'
import { User } from '../../interfaces/user'

const UsersCards = () => {
    const [listOfUsers, setListOfUsers] = useState([])

    useEffect(() => {
      axios.get("http://localhost:3001/users").then((response) => {
        setListOfUsers(response.data) 
      })  
    }, [])
  
    return (
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
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
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.updatedAt}</td>
                  <td>{value.createdAt}</td>
                  <td>{value.status}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
}

export default UsersCards
