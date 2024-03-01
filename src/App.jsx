import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import BackToMain from "./pages/BackToMain";
import Components from "./pages/Components";
import CreditsAndResources from "./pages/CreditsAndResources";
import Customization from "./pages/Customization";
import Home from "./pages/Home";
import Installation from "./pages/Installation";
import UpdateLog from "./pages/UpdateLog";
import UseFullLinks from "./pages/UseFullLinks";

function App() {

  return (
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/installation" element={<Installation />} />
      <Route path="/components" element={<Components />} />
      <Route path="/customization" element={<Customization />} />
      <Route path="/credit-resources" element={<CreditsAndResources />} />
      <Route path="/updateLog" element={<UpdateLog />} />
      <Route path="/use-full-links" element={<UseFullLinks />} />
      <Route path="/back-to-main" element={<BackToMain />} />
      
    </Route>
  </Routes>
  )
}

export default App
