import { Route, Routes, BrowserRouter } from "react-router-dom";
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

function App() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const drawerWidth = 240;
  const Container = styled(Box)(({ theme, drawerWidth, open }) => ({
    display: "flex",
    alignItems: "center",
    marginTop: "80px",
    marginRight: "15px",
    ...(open && {
      marginLeft: `calc(15px + ${drawerWidth}px)`,
    }),
    ...(!open && {
      marginLeft: "80px",
    }),
  }));

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
        <Container component="main" drawerWidth={drawerWidth} open={open}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home drawerWidth={drawerWidth} open={open}/>} />
            <Route path="/profile" element={<Profile drawerWidth={drawerWidth} open={open}/>} />
            <Route path="/vehicle" element={<AddCar drawerWidth={drawerWidth} open={open}/>} />
            <Route path="/order" element={<Order drawerWidth={drawerWidth} open={open}/>} />
          </Routes>
        </BrowserRouter>
        </Container>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
