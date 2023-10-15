import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeStyle = {
    color: "red",
    textDecoration: "underline",
    fontWeight: "bold",
  };

  return (
    <>
      <nav>
        <NavLink
          to="/host"
          end
          style={({isActive}) => isActive ? activeStyle : null}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({isActive}) => isActive ? activeStyle : null}
        >
          Inocome
        </NavLink>
        <NavLink
          to="/host/vans"
          style={({isActive}) => isActive ? activeStyle : null}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({isActive}) => isActive ? activeStyle : null}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
