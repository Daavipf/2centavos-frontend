import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaPenAlt, FaBell, FaUserCircle } from "react-icons/fa";

export default function BottomMenu(){
  return (
    <footer className="fixed bottom-0 left-0">
      <ul className="h-16 w-screen border-t border-slate-200 flex items-center justify-around">
        <li>
          <Link to={'/'} className="text-xl">
            <FaHome/>
          </Link>
        </li>
        <li>
          <Link to={'/buscar'} className="text-xl">
            <FaSearch/>
          </Link>
        </li>
        <li className="w-14 h-14 -mt-8 rounded-full shadow bg-amber-600 flex items-center justify-center">
          <Link to={'/escrever'} className="text-xl text-white">
            <FaPenAlt/>
          </Link>
        </li>
        <li>
          <Link to={'/notificacoes'} className="text-xl">
            <FaBell/>
          </Link>
        </li>
        <li>
          <Link to={'/perfil'} className="text-xl">
            <FaUserCircle/>
          </Link>
        </li>
      </ul>
    </footer>
  )
}