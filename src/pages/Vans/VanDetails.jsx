import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function VanDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [van, setVan] = useState("");
  console.log(location, "Location");

  const fetchVenDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/vens/${id}`);
      setVan(res.data);
    } catch (error) {
      console.error("Error Message: ", error);
    }
  };
  useEffect(() => {
    fetchVenDetails();
  }, [id]);
 
  const search = location.state?.search || "" ;

  return (
    <div>
      <h3>Ven Details: </h3>
            <Link to={`..${search}`} relative="path">&larr;<span>Back to all Vens</span></Link>
      {van ? (
        ((<h3>{van.title}</h3>), 
        (<img src={van.url} alt="img" />))
        
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
}

export default VanDetails;
