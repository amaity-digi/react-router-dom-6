import { NavLink, Link } from "react-router-dom";

function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red"
  }
  return (
    <header>
      <Link to="/">#VanLife</Link>
      <nav className="nav">
        <NavLink to="/" style={({isActive}) => isActive ? activeStyle : null}>Host</NavLink>
        <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null}>About</NavLink>
        <NavLink to="/vans" style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
      </nav>
    </header>
  );
}

export default Header;
