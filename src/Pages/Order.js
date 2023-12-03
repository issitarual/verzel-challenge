import React from "react";
import OrderTable from "../Components/Table";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/material";
export default function Order() {
  const ORDER = "Lista de pedidos";
  const Container = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  }));
  return (
    <Container>
      <Typography variant="h6" gutterBottom={true}>
        {ORDER}
      </Typography>
      <OrderTable></OrderTable>
    </Container>
  );
}
