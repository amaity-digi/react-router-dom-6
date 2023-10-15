import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function HostVanDetails() {
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
    </section>
  )
}

export default HostVanDetails