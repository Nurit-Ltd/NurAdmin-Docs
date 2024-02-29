import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import ComponentPage from "./pages/ComponentPage";
import Home from "./pages/Home";

function App() {

  return (
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/componentPage" element={<ComponentPage />} />
      
    </Route>
  </Routes>
  )
}

export default App
