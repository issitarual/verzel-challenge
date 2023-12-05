import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Typography, styled } from "@mui/material";
import React from "react";

export default function Login({ setLogin }) {
  const LOGIN_BUTTON = "Entrar";
  const LOGIN_TITLE = "Entre na sua conta";
  const NOT_USER = "Não possui uma conta? Cadastre-se!";
  const FormContainer = styled(FormControl)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
  }));

  return (
    <React.Fragment>
      <Typography variant="h6">{LOGIN_TITLE}</Typography>
      <FormContainer>
        <TextField id="email" label="E-mail" margin="normal" />
        <TextField
          id="password"
          label="Senha"
          margin="normal"
          type="password"
        />
        <Button variant="contained" sx={{ marginY: "10px" }}>
          {LOGIN_BUTTON}
        </Button>
      </FormContainer>
      <Link
        underline="hover"
        onClick={() => setLogin(false)}
        textAlign="center"
      >
        {NOT_USER}
      </Link>
    </React.Fragment>
  );
}
