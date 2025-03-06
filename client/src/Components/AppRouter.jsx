import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Body from "./Body";
import RestraurantMenu from "./RestaurantMenu";
import { lazy, Suspense } from "react";
import Cart from "./Cart";


const Grocery=lazy(()=>import("./Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Parent component with <Outlet />
    errorElement: <Error />,
    children: [
      {
        index: true, // ✅ This makes Body the default child route for "/"
        element: <Body />,
      },
      {
        path: "about", // No need for "/" before "about"
        element: <Suspense fallback={<h1>Loading......</h1>}><About /></Suspense>,
      },
      {
        path: "contact", // No need for "/" before "contact"
        element: <Contact />,
      },
      {
        path: "grocery", 
        element: <Suspense fallback={<h1>Loading......</h1>}><Grocery /></Suspense>,
      },
      {
        path: "restaurants/:resId", // No need for "/" before "contact"
        element: <RestraurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>
      },
    ],
  },
]);

export default appRouter;
