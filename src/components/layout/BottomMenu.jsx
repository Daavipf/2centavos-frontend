import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaPenAlt, FaBell, FaUserCircle } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb"

export default function BottomMenu(){
  const {authenticated} = useContext(AuthContext)
  return (
    <footer className="fixed bottom-0 left-0 bg-white">
      <ul className="h-16 w-screen border-t border-slate-200 flex items-center justify-around">
        <li>
          <Link to={'/'} className="text-xl">
            <FaHome/>
          </Link>
        </li>
        {!authenticated &&
          <Link to={'/login'} className="text-xl text-white">
            <li className="w-14 h-14 -mt-8 rounded-full shadow bg-amber-600 flex items-center justify-center cursor-pointer">
                <TbLogin2/>
            </li>
        </Link>
        }
        <li>
          <Link to={'/buscar'} className="text-xl">
            <FaSearch/>
          </Link>
        </li>
        {authenticated &&
          <>
            <Link to={'/escrever'} className="text-xl text-white">
              <li className="w-14 h-14 -mt-8 rounded-full shadow bg-amber-600 flex items-center justify-center cursor-pointer">
                  <FaPenAlt/>
              </li>
            </Link>
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
          </>
        }
      </ul>
    </footer>
  )
}