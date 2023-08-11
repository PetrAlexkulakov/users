import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { formatDateFromDate } from '../../share/fromatDate';

const Register = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const axiosInstance = axios.create({
      baseURL: "http://localhost:3001/users",
    });
    
    axiosInstance.post("/", {
      name,
      email,
      password,
      lastLoginTime: formatDateFromDate(new Date()),
      status: "active",
    })
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className="d-flex flex-column border border-primary p-1 gap-1">
        <input type="text" name="name" placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="btn border-primary">Register</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  )
}

export default Register
