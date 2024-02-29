import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import ComponentPage from "../pages/ComponentPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Home />,
      // },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/componentPage",
        element: <ComponentPage />,
      },
      
    ],
  },
]);

export default router;