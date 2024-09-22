import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext';
import {Drawer, Avatar} from 'flowbite-react'
import { FaGear } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import api from '../../utils/api';

export default function SidebarComponent(){
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState({})
  const [token] = useState(localStorage.getItem('token') || '')
  const {logout} = useContext(AuthContext)

  useEffect(()=>{
    api.get(`/user/viewuser`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }).then((response) => {
      setUser(response.data)
    })
  }, [token])

  function handleSubmit(e){
    logout()
  }

  function handleClose(){
    setIsOpen(false)
  }
  return (
    <header className="fixed z-10 top-0 left-0 h-14 w-screen pr-4 border-b border-slate-200 bg-white flex items-center justify-between">
      <div></div>
      <h2 className='font-klavika text-2xl text-amber-600 justify-self-center'>2Centavos</h2>
      <button onClick={() => {setIsOpen(true)}} className='justify-self-end'><FaGear className='text-2xl'/></button>
      <Drawer open={isOpen} onClose={handleClose} className=''>
        <div>
          <Avatar rounded  alt='Foto de perfil'>
            <div>
              <div>{user.realname}</div>
              <div className='text-gray-600 text-sm'>{user.email}</div>
            </div>
          </Avatar>
        </div>
        <form onSubmit={handleSubmit} className='absolute bottom-8 left-4'>
          <button type='submit' className='flex gap-2 items-center'><TbLogout2/>Sair</button>
        </form>
      </Drawer>
    </header>
  )
}