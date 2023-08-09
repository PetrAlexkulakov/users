import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UsersPage from './UsersPage/UsersPage';
import Auth from './Auth/Auth';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
