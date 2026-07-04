import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import Home from "./pages/home/Home";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;