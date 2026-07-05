import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import Home from "./pages/home/Home";
import { useState } from "react";

function App() {
  const [cartQty, setCartQty] = useState(0);

  const handleAddToCart = (amount) => {
    setCartQty((prev) => prev + amount);
  };

  return (
    <BrowserRouter>
      <Navbar qty={cartQty} />
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home onAddToCart={handleAddToCart}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
