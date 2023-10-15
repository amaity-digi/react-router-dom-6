import { Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetails, {loader as vanDetailsLoader} from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

import "./App.css";
import HostLayout from "./components/HostLayout";
import HostVans, {loader as hostVansLoader} from "./pages/Host/HostVans";
import HostVanDetails, {loader as hostVanDetailsLoader} from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { requiredAuth } from "../Utils";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" element={<VanDetails />} loader={vanDetailsLoader}/>
      <Route path="login" element={<Login />} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requiredAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requiredAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requiredAuth()}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostVanDetailsLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await requiredAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requiredAuth()}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => await requiredAuth()}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//1. Why we used nested route ?
// Whenwver we have shared UI b/w routes in our application that time we used nested route.

//2. What is layout Route??
// It is the parent route of some nested routes that contains just the portion of the UI
// that will be shared.It will use an outlet component.

//3. What does Outlet compoent do?
// We have a parent Route that's wrapping children routes. It renders the matching child
// route's element props given in its route defination.

//4. What is Index route?
//It's a default route, we want to render when the path of the parent route matches.

//Quiz Protect routes:
//1. How did we change our route definations in order to "protect" certains routes from an
// un-logged in user??
// Ans ==> Wrapped the routes we wanted to protect in a layout route that contains logic to
// redirect if they're not login.

//2. What component can we use to automatically send someone to a different route in our application??
// <Navigate to="login"  />

//3. What component can we render if the user Is logged in??
// <Outlet />
