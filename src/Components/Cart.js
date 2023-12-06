import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CartContext from "../Context/CartContext";
import UserContext from "../Context/UserContext";
import axios from "axios";
import { CartDrawerHeader } from "../styles/components";

export default function Cart(props) {
  const { user } = React.useContext(UserContext);
  const { cart, setCart } = React.useContext(CartContext);
  const [loading, setLoading] = React.useState(false);
  const theme = useTheme();

  let total = 0;
  const EMPTY_CART = "Nenhum produto adicionado";
  const DELETE_CAR = "Excluir carro";
  const BUY_CAR = "Finalizar compra";
  const ADD = "Add +1";
  const REMOVE = "Rem -1";

  React.useEffect(() => {
    if (localStorage.cart) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []); //eslint-disable-line
  if (cart) {
    cart.forEach((p) => {
      let sum = p.price.replace(",", ".") * p.qtd;
      total += sum;
    });
  }

  const handleIncreaseQtd = (car) => {
    car.qtd = car.qtd + 1;
    setCart([...cart]);
    localStorage.setItem("cart", JSON.stringify([...cart]));
  };

  const handleDecreaseQtd = (car) => {
    car.qtd = car.qtd - 1;
    if (car.qtd === 0) {
      const newCartFiltered = cart.filter((c) => c !== car);
      setCart([...newCartFiltered]);
      localStorage.setItem("cart", JSON.stringify([...newCartFiltered]));
    } else {
      setCart([...cart]);
      localStorage.setItem("cart", JSON.stringify([...cart]));
    }
  };

  const handleRemoveProduct = (car) => {
    const newCartFiltered = cart.filter((c) => c !== car);
    setCart([...newCartFiltered]);
    localStorage.setItem("cart", JSON.stringify([...newCartFiltered]));
  };

  const handleBuyCars = (e) => {
    e.preventDefault();
    cart.forEach((c) => {
      const body = { car_id: c.id, user_id: user.id, qtd: c.qtd };
      const request = axios.post(`http://127.0.0.1:8000/order`, body);

      setLoading(true);

      request.then((response) => {
        console.log(response.data);
      });

      request.catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          alert("Falha no login, email ou senha incorretos!");
      });
    });

    setCart([]);
    localStorage.removeItem("cart");
  };

  const handleDrawerClose = () => {
    props.setOpenCart(false);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Drawer
        sx={{
          width: props.drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: props.drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={props.openCart}
      >
        <CartDrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <Typography>Carrinho</Typography>
        </CartDrawerHeader>
        <Divider />
        <List>
          {cart.length ? (
            cart?.map((c, index) => (
              <ListItem
                key={c.id}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemText primary={`${c.model} - ${c.brand}`} />
                  <ListItemText
                    primary={`x${c.qtd}`}
                    sx={{ textAlign: "end" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemText primary={"Valor:"} />
                  <ListItemText
                    primary={`R$ ${c.price}`}
                    sx={{ textAlign: "end" }}
                  />
                </Box>
                <Box sx={{ display: "flex", width: "100%", marginY: "5px" }}>
                  <Button
                    variant="outlined"
                    sx={{ width: "100%", marginRight: "5px" }}
                    onClick={() => handleIncreaseQtd(c)}
                  >
                    {ADD}
                  </Button>
                  <Button
                    color="error"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    onClick={() => handleDecreaseQtd(c)}
                  >
                    {REMOVE}
                  </Button>
                </Box>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: "100%" }}
                  onClick={() => handleRemoveProduct(c)}
                >
                  {DELETE_CAR}
                </Button>
              </ListItem>
            ))
          ) : (
            <Typography textAlign={"center"}>{EMPTY_CART}</Typography>
          )}
        </List>
        <Divider />
        {!!cart?.length && (
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography>Total: </Typography>
              <Typography>${total}</Typography>
            </Box>
            <Divider />
            <Button onClick={handleBuyCars}>{BUY_CAR}</Button>
          </React.Fragment>
        )}
      </Drawer>
    </React.Fragment>
  );
}
