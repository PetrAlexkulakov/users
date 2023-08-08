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
      <>
      {listOfUsers.map((value: User, key) => {
        return (
          <div key={key}>
            <div>{value.id}</div>
            <div>{value.name}</div>
            <div>{value.email}</div>
            <div>{value.lastLoginTime}</div>
            <div>{value.registrationTime}</div>
            <div>{value.status}</div>
          </div>
        )
      })}
      </>
    )
}

export default UsersCards
