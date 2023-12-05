import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const CREATE_VEHICLE = "Adicionar veículo";
const UPDATE_VEHICLE = "Atualizar veículo";
const CREATE_VEHICLE_BUTTON = "Adicionar";
const UPDATE_VEHICLE_BUTTON = "Atualizar";
const DELETE_VEHICLE_BUTTON = "Excluir";

const CAR_FIELDS = {
  price: "Preço",
  brand: "Marca",
  model: "Modelo",
  image: "Imagem",
};

export default function AddCar() {
  const [actType, setActType] = React.useState(CREATE_VEHICLE_BUTTON);
  const [model, setModel] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [image, setImage] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [focus, setFocus] = React.useState(CAR_FIELDS.model);
  const Container = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  }));
  const FormContainer = styled(FormControl)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
  }));
  return (
    <Container>
      <FormContainer>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Button
            variant={
              actType === CREATE_VEHICLE_BUTTON ? "contained" : "outlined"
            }
            sx={{ width: "100%", marginRight: "5px" }}
            onClick={() => setActType(CREATE_VEHICLE_BUTTON)}
          >
            {CREATE_VEHICLE}
          </Button>
          <Button
            variant={
              actType === UPDATE_VEHICLE_BUTTON ? "contained" : "outlined"
            }
            sx={{ width: "100%" }}
            onClick={() => setActType(UPDATE_VEHICLE_BUTTON)}
          >
            {UPDATE_VEHICLE}
          </Button>
        </Box>
        <TextField
          id="car-model"
          label={CAR_FIELDS.model}
          margin="normal"
          disabled={loading}
          value={model}
          onChange={(e) => setModel(e.target.value)}
          autoFocus={focus === CAR_FIELDS.model}
          onClick={() => {
            setFocus(CAR_FIELDS.model);
          }}
        />
        <TextField
          id="car-brand"
          label={CAR_FIELDS.brand}
          margin="normal"
          disabled={loading}
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          autoFocus={focus === CAR_FIELDS.brand}
          onClick={() => {
            setFocus(CAR_FIELDS.brand);
          }}
        />
        <TextField
          id="car-price"
          label={CAR_FIELDS.price}
          margin="normal"
          disabled={loading}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          autoFocus={focus === CAR_FIELDS.price}
          onClick={() => {
            setFocus(CAR_FIELDS.price);
          }}
        />
        <TextField
          id="car-image"
          label={CAR_FIELDS.image}
          margin="normal"
          disabled={loading}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          autoFocus={focus === CAR_FIELDS.image}
          onClick={() => {
            setFocus(CAR_FIELDS.image);
          }}
        />
        <Button variant="contained" sx={{ marginY: "10px" }}>
          {actType === CREATE_VEHICLE_BUTTON ? CREATE_VEHICLE : UPDATE_VEHICLE}
        </Button>
        {actType === CREATE_VEHICLE_BUTTON ? null : (
          <Button variant="contained" color="error" sx={{ marginY: "10px" }}>
            {DELETE_VEHICLE_BUTTON}
          </Button>
        )}
      </FormContainer>
    </Container>
  );
}
