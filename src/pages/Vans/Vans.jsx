import axios from "axios";
import { useSearchParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/vens"
    );
    const data = response?.data;
    return data;
  } catch (error) {
    throw {
      message: "Failed to fetch Vens!", 
      errors: error.message
    }
  }
};

export function loader(){
  return fetchData();
}

function Vans() {
  const [searchParam, setSearchParam] = useSearchParams();
  const typeFilter = searchParam.get("type");
  const vens = useLoaderData();
  console.log(vens, 'useLoader');

  const dispalyVans = typeFilter ? vens.filter((van) => van.type === typeFilter) : vens

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


//A. What are the benefits of using data loader function instead of fetching data in a useEffect??
// 1. Don't need to worry about handling loading state.
// 2. Don't need to handle error state.

//B. What change so we need to make to our BrowserRouter before we can use loadres in our applictaion??
// Get rid of BrowserRouter component and use createBrowserRouter() instead. Can use 
// createRoutersFromElements() to make the transition a bit easier.

//C. What are the steps we need to take in order to use  a loader on any given route?
// a. Define and export a loader function.
// b. Import the loader and pass it to the route, we are wanting to fetch data for .
// c. Use the useLoaderData() hook to get the data from the loader function.

