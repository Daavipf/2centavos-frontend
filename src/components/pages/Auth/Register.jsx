import { useContext, useState } from "react"
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";

export default function Register(){
  const [user, setUser] = useState({})
  const {register} = useContext(AuthContext)
  
  function handleChange(e){
    setUser({...user, [e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    register(user)
  }
  return (
    <main className="w-screen h-screen p-8 bg-slate-50 flex flex-col items-center justify-center">
      <Link to={'/login'} className="fixed top-4 left-4">
        <FaArrowLeft size={'24px'}/>
      </Link>
      <h1 className="mb-8 font-klavika text-4xl text-amber-600">2centavos</h1>
      <h2>Crie sua conta</h2>
      <form onSubmit={handleSubmit} className="w-full mt-4 flex flex-col gap-4">
        <input type="text" name="username" placeholder="Seu nome de Usuário" onChange={handleChange} className="p-4 rounded-lg shadow border-none focus:ring-0 bg-slate-50"/>
        <input type="email" name="email" placeholder="Seu e-mail" onChange={handleChange} className="p-4 rounded-lg shadow border-none focus:ring-0 bg-slate-50"/>
        <input type="password" name="password" placeholder="Sua Senha" onChange={handleChange} className="p-4 rounded-lg shadow border-none focus:ring-0 bg-slate-50"/>
        <input type="password" name="confirm_password" placeholder="Confirme a Senha" onChange={handleChange} className="p-4 rounded-lg shadow border-none focus:ring-0 bg-slate-50"/>
        <button type="submit" className="mt-4 p-4 rounded-lg shadow-lg bg-amber-600 text-white font-semibold">Entrar</button>
      </form>
    </main>
  )
}