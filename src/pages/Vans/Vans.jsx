import axios from "axios";
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Vans() {
  const [vens, setVens] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const typeFilter = searchParam.get("type");

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

  const dispalyVans = typeFilter ? vens.filter((van) => van.type === typeFilter) : vens
  console.log("1", searchParam.toString());

  return (
    <div>
      <h3>Explore our Vans options</h3>
      <button onClick={() => setSearchParam({type: "tour"})}>Tour</button>
      <button onClick={() => setSearchParam({type: "simple"})}>Simple</button>
      <button onClick={() => setSearchParam({type: "luxury"})}>luxury</button>
      <Link to=".." relative="path">&larr;<span>Back to all Vens</span></Link>
      <ul>
        {dispalyVans?.map((item) => (
          <div key={item.id}>
            <Link to={item.id} state={{search: `${searchParam.toString()}`}}>
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
