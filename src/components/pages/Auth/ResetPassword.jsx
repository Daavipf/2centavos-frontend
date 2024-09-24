import { useContext, useState } from "react"
import { AuthContext } from "../../../context/AuthContext";
import { Link, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";

export default function ResetPassword(){
  const [new_passwords, setNew_passwords] = useState("")
  const {reset_token} = useParams()
  const [loading, setLoading] = useState(false)
  const {resetPassword} = useContext(AuthContext)
  
  function handleChange(e){
    setNew_passwords({...new_passwords, [e.target.name]:e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    await resetPassword(new_passwords, reset_token)
    setLoading(false)
    //console.log(new_passwords, reset_token)
  }
  return (
    <main className="w-screen h-screen p-8 bg-slate-50 flex flex-col items-center justify-center gap-4">
      <Link to={'/login'} className="fixed top-4 left-4">
        <FaArrowLeft size={'24px'}/>
      </Link>
      <h1 className="mb-8 font-klavika text-4xl text-amber-600">2centavos</h1>
      <h2 className="text-center text-xl">Redefina a sua senha abaixo</h2>
      <form onSubmit={handleSubmit} className="w-full mt-4 flex flex-col gap-4">
        <input type="password" name="new_password" placeholder="Nova senha" onChange={handleChange} className="p-4 rounded-lg shadow border-none focus:ring-0 bg-slate-50"/>
        <input type="password" name="confirm_new_password" placeholder="Confirme a senha" onChange={handleChange} className="p-4 rounded-lg shadow border-none focus:ring-0 bg-slate-50"/>
        <button type="submit" disabled={loading} className={`mt-4 p-4 rounded-lg shadow-lg bg-amber-600 text-white font-semibold ${loading ? 'opacity-50' : ''}`}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </main>
  )
}