import { createBrowserRouter } from "react-router-dom";
import HtmlComponent from "../components/screen/Component/HtmlCom/HtmlComponent";
import NextComponents from "../components/screen/Component/NextCom/NextComponents";
import ReactComponent from "../components/screen/Component/ReactCom/ReactComponent";
import VueComponent from "../components/screen/Component/VueCom/VueComponent";
import Layout from "../layouts/Layout";
import BackToMain from "../pages/BackToMain";
import Components from "../pages/Components";
import CreditsAndResources from "../pages/CreditsAndResources";
import Customization from "../pages/Customization";
import Home from "../pages/Home";
import Installation from "../pages/Installation";
import UpdateLog from "../pages/UpdateLog";
import UseFullLinks from "../pages/UseFullLinks";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/components",
        element: <Components />,
      },
      {
        path: "/customization",
        element: <Customization />,
      },
      {
        path: "/credit-resources",
        element: <CreditsAndResources />,
      },
      {
        path: "/update-log",
        element: <UpdateLog />,
      },
      {
        path: "/use-full-links",
        element: <UseFullLinks />,
      },
      {
        path: "https://tailadmin.com/",
        element: <BackToMain />,
      },
      {
        path: "/components/html-components",
        element: <HtmlComponent />,
      },
      {
        path: "/components/react-components",
        element: <ReactComponent />,
      },
      {
        path: "/components/next-components",
        element: <NextComponents />,
      },
      {
        path: "/components/vue-components",
        element: <VueComponent />,
      },
    ],
  },
]);