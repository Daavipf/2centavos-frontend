import { createContext } from "react";
import useAuth from "../hooks/useAuth";

export const AuthContext = createContext()

export function AuthContextProvider({children}){
  const {login, logout, register, authenticated} = useAuth()
  return (
    <AuthContext.Provider value={{login, logout, register, authenticated}}>
      {children}
    </AuthContext.Provider>
  )
}