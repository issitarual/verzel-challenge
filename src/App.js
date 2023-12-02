import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserContext from "./Context/UserContext";
import CartContext from "./Context/CartContext";
import { useState } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Car from "./Pages/Car";
import Profile from "./Pages/Profile";

function App() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider
      value={{
        user: user || JSON.parse(localStorage.getItem("user")),
        setUser,
      }}
    >
      <CartContext.Provider
        value={{
          cart: cart || JSON.parse(localStorage.getItem("cart")),
          setCart,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/sign-up" Component={SignUp} />
            <Route path="/car/:carId"  Component={Car} />
            <Route path="/profile" Component={Profile} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;