import axios from "axios";
import { useLoaderData, useLocation, Link } from "react-router-dom";

const fetchVenDetails = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/vens/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error Message: ", error);
  }
};

export function loader({ params }) {
  return fetchVenDetails(params.id);
}

function VanDetails() {
  const location = useLocation();
  console.log(location, "Location");
  const van = useLoaderData();

  const search = location.state?.search || "";

  return (
    <div>
      <h3>Ven Details: </h3>
      <Link to={`..${search}`} relative="path">
        &larr;<span>Back to all Vens</span>
      </Link>
      {van ? (
        ((<h3>{van.title}</h3>), (<img src={van.url} alt="img" />))
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
}

export default VanDetails;
