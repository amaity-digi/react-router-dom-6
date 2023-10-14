import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

function HostLayout() {
  return (
    <>
    <nav>
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Inocome</Link>
        <Link to="/host/reviews">Reviews</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default HostLayout