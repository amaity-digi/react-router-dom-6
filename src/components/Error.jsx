import { useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
        <h3>Error: {error.message}</h3>
        <pre>{error.errors}</pre>
    </div>
  )
}

export default Error