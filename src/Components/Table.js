import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import carsList from "../Utils/CarsList";
import CAR_FIELDS from "../Utils/CarFields";
import { styled } from "@mui/material/styles";

export default function OrderTable() {
  const ImageField = styled("img")(() => ({
    borderRadius: "50%",
    height: "50px",
  }));
  const ORDER_NUMBER = "Número do pedido"
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{ORDER_NUMBER}</TableCell>
            <TableCell align="center">{CAR_FIELDS.image}</TableCell>
            <TableCell align="center">{CAR_FIELDS.model}</TableCell>
            <TableCell align="center">{CAR_FIELDS.brand}</TableCell>
            <TableCell align="center">{CAR_FIELDS.price}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carsList.map((c) => (
            <TableRow
              key={c.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
            <TableCell component="th" scope="row" align="center">
              {"123"}
            </TableCell>
              <TableCell align="center">
                <ImageListItem key={c.image}>
                  <ImageField
                    srcSet={c.image}
                    src={c.image}
                    alt={c.model}
                    loading="lazy"
                  />
                </ImageListItem>
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {c.model}
              </TableCell>
              <TableCell align="center">{c.brand}</TableCell>
              <TableCell align="center">{c.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
