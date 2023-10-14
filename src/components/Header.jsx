import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
    <Link to="/">VanLife</Link>
    <nav>
      <Link to="/about">About</Link>
    </nav>
    </header>
  )
}

export default Header