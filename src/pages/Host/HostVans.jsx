import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [vens, setVens] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/vens"
      );
      const data = response?.data;
      setVens(data);
      console.log(data);
    } catch (error) {
      console.error("Error Message: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Your Listed Vans: </h2>
     
      {vens.length > 0 ? 
      vens?.map((item) => (
          <div key={item.id}>
             <Link to={`${item.id}`} >
              <img src={item.url} alt="img" />
              <h5> {item.name}</h5>
              <h5> {item.price}</h5>
              </Link>
          </div>
        )) : <h4>Loading...</h4>}
        
    </div>
  )
}

export default HostVans