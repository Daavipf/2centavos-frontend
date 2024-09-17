import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'

//Context
import { AuthContextProvider } from './context/AuthContext'

// Componentes
import RotaProtegida from './components/RotaProtegida'
import Message from './components/Message'
import Layout from './components/layout/Layout'

// Páginas
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/app/Home'
import Search from './components/pages/app/Search'
import Settings from './components/pages/app/Settings'
import Profile from './components/pages/app/Profile'
import Notifications from './components/pages/app/Notifications'
import WritePost from './components/pages/app/WritePost'

function App() {

  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Register/>}/>
          <Route path='/' element={<RotaProtegida><Layout/></RotaProtegida>}>
            <Route index element={<Home/>}/>
            <Route path='/buscar' element={<Search/>}/>
            <Route path='/escrever' element={<WritePost/>}/>
            <Route path='/notificacoes' element={<Notifications/>}/>
            <Route path='/perfil' element={<Profile/>}/>
          </Route>
        </Routes>
        <Message/>
      </AuthContextProvider>
    </Router>
  )
}

export default App
