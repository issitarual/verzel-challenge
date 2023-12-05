import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import axios from "axios";

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
  const [car, setCar] = React.useState([]);
  const [carId, setCarId] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [focus, setFocus] = React.useState(CAR_FIELDS.model);
  const [open, setOpen] = React.useState(false);
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

  const handleChange = (event) => {
    setCarId(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSelectCar = (c) => {
    setCarId(c.id);
    setModel(c.model);
    setPrice(c.price);
    setImage(c.image);
    setBrand(c.brand);
  };

  const handleChangeVehicleAct = () => {
    setCarId("");
    setModel("");
    setPrice("");
    setImage("");
    setBrand("");
  };

  React.useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/car`)
      .then((success) => {
        setCar(success.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Algo deu errado, tente novamente!");
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <FormContainer>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Button
            variant={
              actType === CREATE_VEHICLE_BUTTON ? "contained" : "outlined"
            }
            sx={{ width: "100%", marginRight: "5px" }}
            onClick={() => {
              setActType(CREATE_VEHICLE_BUTTON);
              handleChangeVehicleAct();
            }}
          >
            {CREATE_VEHICLE}
          </Button>
          <Button
            variant={
              actType === UPDATE_VEHICLE_BUTTON ? "contained" : "outlined"
            }
            sx={{ width: "100%" }}
            onClick={() => {
              setActType(UPDATE_VEHICLE_BUTTON);
              handleChangeVehicleAct();
            }}
          >
            {UPDATE_VEHICLE}
          </Button>
        </Box>
        {actType === CREATE_VEHICLE_BUTTON ? (
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
        ) : (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={carId}
            onChange={handleChange}
            margin="normal"
            sx={{ marginTop: "20px" }}
          >
            <MenuItem value="">
              <em>Selecione um Modelo</em>
            </MenuItem>
            {car.map((c) => (
              <MenuItem
                value={c.id}
                key={c.id}
                onClick={() => handleSelectCar(c)}
              >
                {c.model}
              </MenuItem>
            ))}
          </Select>
        )}
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
