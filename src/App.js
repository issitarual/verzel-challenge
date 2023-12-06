import { Route, Routes } from "react-router-dom";
import UserContext from "./Context/UserContext";
import CartContext from "./Context/CartContext";
import { useState } from "react";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AddCar from "./Pages/AddCar";
import Order from "./Pages/Order";
import DrawerMenu from "./Components/Drawer";
import Header from "./Components/Header";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Cart from "./Components/Cart";
import { AppContainer } from "./styles/components";

function App() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const drawerWidth = 240;

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
        <Header
          open={open}
          setOpen={setOpen}
          drawerWidth={drawerWidth}
          setOpenCart={setOpenCart}
          openCart={openCart}
        />
        <DrawerMenu open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
        <Cart
          openCart={openCart}
          setOpenCart={setOpenCart}
          drawerWidth={drawerWidth}
        />
        <AppContainer component="main" drawerWidth={drawerWidth} open={open}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/vehicle" element={<AddCar />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </AppContainer>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
