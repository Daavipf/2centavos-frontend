import { Outlet } from "react-router-dom"
import BottomMenu from './BottomMenu'
import Container from "./Container"
import SidebarComponent from "./SidebarComponent"

export default function Layout(){
  return (
    <>
      <SidebarComponent/>
      <Container>
        <Outlet/>
      </Container>
      <BottomMenu/>
    </>
  )
}