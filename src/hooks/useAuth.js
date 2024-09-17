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
      //console.log(token)
      api.defaults.headers.Authorization = `Bearer ${token}`
      setAuthenticated(true)
    }
  }, [])

  async function register(user){
    let msgText = "Cadastro realizado com sucesso!"
    await api.post('/auth/register', user)
      .then(function (response){
        console.log(response)
        navigate('/login')
      }).catch(function (error){
        msgText = error.response.data.message
      })
      setFlashMessage(msgText)
  }

  async function login(user){
    let msgText = "Login realizado com sucesso!"
    await api.post('/auth/login', user)
      .then(function (response){
        localStorage.setItem('token', response.data.token)
        setAuthenticated(true)
        navigate('/')
      }).catch(function (error){
        msgText = error.response.data.message
      })
      setFlashMessage(msgText)
  }

  async function logout(){
    localStorage.removeItem('token')
    setAuthenticated(false)
    navigate('/login')
  }
  
  return {login, logout, register, authenticated}

}