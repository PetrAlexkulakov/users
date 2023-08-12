import './App.scss'
import AppRouter from './pages/AppRouter'
import { UserProvider } from './share/UserContext'

function App() {

  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  )
}

export default App
