import { Outlet } from "react-router-dom"
import Header from "./Header"

function Layout() {
  return (
    <>
    
    <h2>We are in Layout Page</h2>
    <Header />
    <Outlet />
    </>
  )
}

export default Layout