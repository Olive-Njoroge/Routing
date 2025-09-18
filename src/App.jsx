import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Coffee from "./pages/Coffee";
import Signup from "./pages/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/form" element={<Signup />} />
        <Route path="/coffee" element={<Coffee />} />
      </Route>
    </Routes>
  );
}

export default App;
