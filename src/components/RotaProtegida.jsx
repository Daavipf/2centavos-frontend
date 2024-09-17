import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function RotaProtegida({children}){
  const {authenticated} = useContext(AuthContext)
  return authenticated ? (<> {children} </>) : (<Navigate to={'/login'} replace={true}/>)
}