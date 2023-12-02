import * as React from "react";
import carsList from "../Utils/CarsList";
import CarCard from "../Components/CarCard";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Home({ drawerWidth, open }) {
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
  function sortByPrice(car) {
    return car.sort(function(a, b) {
      return a.price < b.price ? -1 : (a.price > b.price) ? 1 : 0;
    });
  }
  return (
    <Container component="main" drawerWidth={drawerWidth} open={open}>
      {sortByPrice(carsList).map((c) => (
        <CarCard car={c} key={c.id} />
      ))}
    </Container>
  );
}
