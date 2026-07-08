import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import Home from "./pages/home/Home";
import { useState } from "react";
import Cart from "./pages/home/Cart";
import Account from "./pages/account/Account";
import MainLayout from "./pages/layout/MainLayout";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async (product, qty) => {
    try {
      const response = await fetch("https://dummyjson.com/carts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          products: [
            {
              id: product.id,
              quantity: qty,
            },
          ],
        }),
      });

      if (response.ok) {
        setCartItems((prevItems) => {
          const itemExists = prevItems.find((item) => item.id === product.id);

          if (itemExists) {
            return prevItems.map((item) =>
              item.id === product.id ? { ...item, qty: item.qty + qty } : item
            );
          }
          return [...prevItems, { ...product, qty }];
        });
      }
    } catch (error) {
      console.error("Error connecting to API:", error);
    }
  };

  const totalNavbarQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <BrowserRouter>
      {/* <Navbar qty={totalNavbarQty} /> */}
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<MainLayout qty={totalNavbarQty} />}>
          <Route path="/home" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
