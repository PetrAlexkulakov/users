import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { User } from '../../interfaces/user';

const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.get("http://localhost:3001/users").then(async (response) => {
        const user: User = response.data.find((el: User) => el.email === email)
        if (user && user.password === password){
            user.lastLoginTime = String(Math.random());
            await axios.put(`http://localhost:3001/users/${user.id}`, user).then(response => {
                console.log('User updated:', response.data);
            }).catch(error => {
                console.error('Error:', error);
            });
            navigate('/')
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
