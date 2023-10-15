import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function HostVanDetails() {
  const { id } = useParams();
  const [van, setVan] = useState("");

  const ActiveStyles = {
    textDecoration: "underline",
    color: "green",
    fontWeight: "24px"
  }

  const fetchVenDetails = async () => {
    try {
      console.log("first");
      const res = await axios.get(`http://localhost:3000/vens/${id}`);
      setVan(res.data);
    } catch (error) {
      console.error("Error Message: ", error);
    }
  };
  useEffect(() => {
    fetchVenDetails();
  }, [id]);
  
  if(!van){
    return <h3>Loading...</h3>
  }
  return (
    <section>
      <Link to=".." relative="path">&larr;<span>Back to all Vens</span></Link>
    <div>
      <img src={van.url} alt="img" width={150}/>
      <h2>{van.name}</h2>
      <h6>{van.price}</h6>
    </div>
    <nav>
      <NavLink to="." end style={({isActive}) => isActive ? ActiveStyles : null} >Details</NavLink> 
      <NavLink to="pricing" style={({isActive}) => isActive ? ActiveStyles : null}   >Pricing</NavLink>
      <NavLink to="photos" style={({isActive}) => isActive ? ActiveStyles : null}  >Photos</NavLink>
    </nav>
    <Outlet context={{van}} />
    </section>
  )
}

export default HostVanDetails

// using end attributes , now details is the only navlink is displayed. or being highlighted
// rather pricing orphotos.
// Outlet : It is just a context provider in react.
// I create a context props inside Outlet  and what ever value I passed to my context prop
// It will be receivable in my other component using hook called useOutletContext. 
