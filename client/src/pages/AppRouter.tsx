import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UsersPage from './UsersPage';
import Register from './Register';
import Login from './Login';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
