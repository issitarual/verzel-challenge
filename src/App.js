import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserContext from "./Context/UserContext";
import CartContext from "./Context/CartContext";
import { useState } from "react";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import DrawerMenu from "./Components/Drawer";
import Header from "./Components/Header";

function App() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const drawerWidth = 240;

  return (
    <UserContext.Provider
      value={{
        user: user || JSON.parse(localStorage.getItem("user")),
        setUser,
      }}
    >
      <Header open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
      <DrawerMenu open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
      <CartContext.Provider
        value={{
          cart: cart || JSON.parse(localStorage.getItem("cart")),
          setCart,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home drawerWidth={drawerWidth} open={open}/>} />
            <Route path="/profile" element={<Profile drawerWidth={drawerWidth} open={open}/>} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
