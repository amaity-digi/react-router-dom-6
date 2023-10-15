import { Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";


import "./App.css";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
  <Route  index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="vans" element={<Vans />} />
  <Route path="vans/:id" element={<VanDetails />} />

  <Route path="host"  element={<HostLayout />}>
    <Route index element={<Dashboard />}/>
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
    <Route path="vans" element={<HostVans />} />
    <Route path="vans/:id" element={<HostVanDetails />} >
      <Route index element={<HostVanInfo />}/>
      <Route path="pricing" element={<HostVanPricing />}/>
      <Route  path="photos" element={<HostVanPhotos />}/>
    </Route>
  </Route>
  <Route path="*" element={<NotFound />}/>
</Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
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