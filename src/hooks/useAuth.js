import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFlashMessage from './useFlashMessage'
import api from '../utils/api'

export default function useAuth(){
  const [authenticated, setAuthenticated] = useState(false)
  const navigate = useNavigate()
  const {setFlashMessage} = useFlashMessage()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      api.defaults.headers.Authorization = `Bearer ${token}`
      setAuthenticated(true)
    }
  }, [])

  async function register(user){
    let msgText = "Cadastro realizado com sucesso!"
    try {
      await api.post('/auth/register', user)
      navigate('/login')
    } catch (error) {
      msgText = error.response.data.message
    }
    setFlashMessage(msgText)
  }

  async function login(user){
    let msgText = "Login realizado com sucesso!"
    try {
      const response = await api.post('/auth/login', user)
      localStorage.setItem('token', response.data.token)
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`
      setAuthenticated(true)
      navigate('/')
    } catch (error) {
      msgText = error.response.data.message
    }
    setFlashMessage(msgText)
  }

  async function logout(){
    localStorage.removeItem('token')
    delete api.defaults.headers.Authorization
    setAuthenticated(false)
    navigate('/login')
    setFlashMessage("Logout realizado com sucesso")
  }

  async function forgotPassword(email){
    let msgText = "E-mail enviado! Cheque sua caixa postal"
    try {
      await api.post('/auth/forgotpassword', email)
      navigate('/login')
    } catch (error) {
      msgText = error.response.data.message
    }
    setFlashMessage(msgText)
  }

  async function resetPassword(new_passwords, reset_token){
    let msgText = "Senha redefinida com sucesso!"
    try {
      await api.post(`/auth/resetpassword/${reset_token}`, new_passwords)
      navigate('/login')
    } catch (error) {
      msgText = error.response.data.message
    }
    setFlashMessage(msgText)
  }
  
  return {login, logout, register, forgotPassword, resetPassword, authenticated}

}