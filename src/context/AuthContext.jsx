import { createContext } from "react";
import useAuth from "../hooks/useAuth";

export const AuthContext = createContext()

export function AuthContextProvider({children}){
  const {login, logout, register, forgotPassword, resetPassword, authenticated} = useAuth()
  return (
    <AuthContext.Provider value={{login, logout, register, forgotPassword, resetPassword, authenticated}}>
      {children}
    </AuthContext.Provider>
  )
}