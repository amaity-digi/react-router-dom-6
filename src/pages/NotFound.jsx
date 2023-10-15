import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
        <h2>Sorry the page you were looking for was not found.</h2>
        <Link to="/">Return to Home</Link>
    </div>
  )
}

export default NotFound