import { useContext, useState } from "react"
import { AuthContext } from "../../../context/AuthContext"
import { Link } from "react-router-dom"

export default function Login(){
  const [user, setUser] = useState({})
  const {login} = useContext(AuthContext)

  function handleChange(e){
    setUser({...user, [e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    login(user)
  }

  return (
    <main className="w-screen h-screen p-8 bg-slate-50 flex flex-col items-center justify-center">
      <h1 className="mb-8 font-klavika text-4xl text-amber-600">2centavos</h1>
      <h2>Faça Login com sua conta</h2>
      <form onSubmit={handleSubmit} className="w-full mt-4 flex flex-col gap-4">
        <input type="email" name="email" placeholder="Seu e-mail" onChange={handleChange} className="p-4 rounded-lg shadow border-none focus:ring-0 bg-slate-50"/>
        <input type="password" name="password" placeholder="Sua Senha" onChange={handleChange} className="p-4 rounded-lg shadow border-none focus:ring-0 bg-slate-50"/>
        <button type="submit" className="mt-4 p-4 rounded-lg shadow-lg bg-amber-600 text-white font-semibold">Entrar</button>
      </form>
      <span className="mt-4 text-sm">Não tem uma conta? <Link to={'/cadastro'} className="text-amber-800">Cadastre-se</Link></span>
      
    </main>
  )
}