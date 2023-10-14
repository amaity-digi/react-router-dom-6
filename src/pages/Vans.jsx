import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Vans() {
  const [vens, setVens] = useState();
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
      <h3>Vans</h3>
      <ul>
        {vens?.map((item) => (
          <div key={item.id}>
            <Link to={`/vans/${item.id}`}>
              <img src={item.url} alt="img" />
              <li> {item.title}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Vans;
