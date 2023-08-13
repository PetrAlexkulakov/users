import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AnyUser, User } from '../../interfaces/user';
import { formatDateFromDate } from '../../share/fromatDate';
import { basicUrl } from '../../share/basicUrl';

const Login = ({ setLoggedUser }: { setLoggedUser: React.Dispatch<React.SetStateAction<AnyUser>> }) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.get(basicUrl).then(async (response) => {
        const user: User = response.data.find((el: User) => el.email === email)
        if (user && user.password === password && user.status === "active"){
            user.lastLoginTime = formatDateFromDate(new Date());
            axios.put(`${basicUrl}/${user.id}`, user).then((resp) => {
              setLoggedUser(resp.data)
              navigate('/')
            }).catch(error => {
                console.error('Error:', error);
            });
        }
    })  
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className="d-flex flex-column border border-primary p-1 gap-1">
        <input type="email" name="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="btn border-primary">Login</button>
        <Link to="/register">Registration</Link>
      </form>
    </div>
  )
}

export default Login
