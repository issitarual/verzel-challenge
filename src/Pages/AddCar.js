import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default function AddCar() {
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
          <Button variant="outlined" sx={{ width: "100%", marginRight: "5px" }}>
            {CREATE_VEHICLE}
          </Button>
          <Button variant="contained" sx={{ width: "100%" }}>
            {UPDATE_VEHICLE}
          </Button>
        </Box>
        <TextField id="car-model" label={CAR_FIELDS.model} margin="normal" />
        <TextField id="car-brand" label={CAR_FIELDS.brand} margin="normal" />
        <TextField id="car-price" label={CAR_FIELDS.price} margin="normal" />
        <TextField id="car-image" label={CAR_FIELDS.image} margin="normal" />
        <Button variant="contained" sx={{ marginY: "10px" }}>
          {CREATE_VEHICLE}
        </Button>
        <Button variant="contained" color="error" sx={{ marginY: "10px" }}>
          {DELETE_VEHICLE_BUTTON}
        </Button>
      </FormContainer>
    </Container>
  );
}
