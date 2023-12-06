import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import CAR_FIELDS from "../Utils/CarFields";
import { ImageField } from "../styles/components";

export default function OrderTable({ ...props }) {
  const ORDER_NUMBER = "Número do pedido";
  const QUANTITY = "Quantidade";
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{ORDER_NUMBER}</TableCell>
            <TableCell align="center">{CAR_FIELDS.image}</TableCell>
            <TableCell align="center">{QUANTITY}</TableCell>
            <TableCell align="center">{CAR_FIELDS.model}</TableCell>
            <TableCell align="center">{CAR_FIELDS.brand}</TableCell>
            <TableCell align="center">{CAR_FIELDS.price}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.order.map((c) => (
            <TableRow
              key={c.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {c.id}
              </TableCell>
              <TableCell align="center">
                <ImageListItem key={c?.car?.image}>
                  <ImageField
                    srcSet={c?.car?.image}
                    src={c?.car?.image}
                    alt={c?.car?.model}
                    loading="lazy"
                  />
                </ImageListItem>
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {c?.qtd}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {c?.model}
              </TableCell>
              <TableCell align="center">{c?.car?.brand}</TableCell>
              <TableCell align="center">{c?.car?.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
