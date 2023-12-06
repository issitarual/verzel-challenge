import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import CartContext from "../Context/CartContext";

export default function CarCard({ car }) {
  const { cart, setCart } = React.useContext(CartContext);
  const { brand, image, model, price } = car;
  const ADD_CART = "Adicionar ao carrinho";

  const handleAddCar = (e) => {
    e.stopPropagation();
    let found = cart.find((c) => c.model === car.model);
    if (cart.includes(found)) {
      found.qtd = found.qtd + 1;
      localStorage.setItem("cart", JSON.stringify([...cart]));
      alert("Mais um item adicionado no carrinho!");
    } else {
      let qtd = 1;
      setCart([...cart, { ...car, qtd }]);
      localStorage.setItem("cart", JSON.stringify([...cart, { ...car, qtd }]));
      alert("Item adicionado no carrinho!");
    }
  };
  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardMedia sx={{ height: 140 }} image={image} title={model} />
      <CardContent>
        <Typography gutterBottom variant="h5" align="center">
          {`${brand} ${model}`}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontWeight: "bold" }}
          align="center"
        >
          {`R$ ${price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddCar}>
          <AddIcon /> {ADD_CART}
        </Button>
      </CardActions>
    </Card>
  );
}
