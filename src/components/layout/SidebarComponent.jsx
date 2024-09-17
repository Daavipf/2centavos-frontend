import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import {Drawer, Avatar} from 'flowbite-react'
import { FaGear } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";

export default function SidebarComponent(){
  const [isOpen, setIsOpen] = useState(false)
  const {logout} = useContext(AuthContext)

  function handleSubmit(e){
    logout()
  }

  function handleClose(){
    setIsOpen(false)
  }
  return (
    <header className="h-14 w-screen pr-4 border-b border-slate-200 flex items-center justify-between">
      <div></div>
      <h2 className='font-klavika text-2xl text-amber-600 justify-self-center'>2Centavos</h2>
      <button onClick={() => {setIsOpen(true)}} className='justify-self-end'><FaGear className='text-2xl'/></button>
      <Drawer open={isOpen} onClose={handleClose} className='h-screen flex flex-col justify-between'>
        <div>
          <Avatar rounded  alt='Foto de perfil'>
            <div>
              <div>Username</div>
              <div className='text-gray-600 text-sm'>endereco.email@mail.com</div>
            </div>
          </Avatar>
        </div>
        <form onSubmit={handleSubmit} className=''>
          <button type='submit' className='flex gap-2 items-center'><TbLogout2/>Sair</button>
        </form>
      </Drawer>
    </header>
  )
}