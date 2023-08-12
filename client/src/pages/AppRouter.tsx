import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import UsersPage from './UsersPage';
import Register from './Register';
import Login from './Login';
import { UserContext } from '../share/UserContext';

const AppRouter = () => {
    const { LoggedUser, setLoggedUser } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={LoggedUser.status !== 'active' ? <Login setLoggedUser={setLoggedUser} /> : <Navigate to="/" />} />
        <Route path="/register" element={LoggedUser.status !== 'active' ? <Register setLoggedUser={setLoggedUser} /> : <Navigate to="/" />} />
        <Route path="/" element={LoggedUser.status === 'active' ? <UsersPage /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
