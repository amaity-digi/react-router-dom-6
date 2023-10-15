import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VanDetails() {
  const { id } = useParams();
  const [van, setVan] = useState("");

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

  return (
    <div>
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
