import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UsersPage from './UsersPage/UsersPage';
import Register from './Register/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
