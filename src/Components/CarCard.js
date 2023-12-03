import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

export default function CarCard({ car }) {
  const { brand, image, model, price } = car;
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
        <Button size="small">
          <AddIcon /> Adicionar ao Carrinho
        </Button>
      </CardActions>
    </Card>
  );
}
