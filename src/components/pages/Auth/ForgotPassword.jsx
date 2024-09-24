import { useContext, useState } from "react"
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";

export default function ForgotPassword(){
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const {forgotPassword} = useContext(AuthContext)
  
  function handleChange(e){
    setEmail({...email, [e.target.name]:e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    await forgotPassword(email)
    setLoading(false)
  }
  return (
    <main className="w-screen h-screen p-8 bg-slate-50 flex flex-col items-center justify-center gap-4">
      <Link to={'/login'} className="fixed top-4 left-4">
        <FaArrowLeft size={'24px'}/>
      </Link>
      <h1 className="mb-8 font-klavika text-4xl text-amber-600">2centavos</h1>
      <h2 className="text-center text-xl">Esqueceu a senha?</h2>
      <p className="text-center">Sem problema! Enviaremos um e-mail para você redefinir a sua senha.</p>
      <form onSubmit={handleSubmit} className="w-full mt-4 flex flex-col gap-4">
        <input type="email" name="email" placeholder="Seu e-mail" onChange={handleChange} className="p-4 rounded-lg shadow border-none focus:ring-0 bg-slate-50"/>
        <button type="submit" disabled={loading} className={`mt-4 p-4 rounded-lg shadow-lg bg-amber-600 text-white font-semibold ${loading ? 'opacity-50' : ''}`}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </main>
  )
}