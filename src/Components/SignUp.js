import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Typography, styled } from "@mui/material";
import React from "react";

export default function SignUp() {
  const SIGNUP_BUTTON = "Cadastrar";
  const SIGNUP_TITLE = "Crie uma conta";
  const CURRENT_USER = "Já é cadastrado? Entre na sua conta!";
  const FormContainer = styled(FormControl)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
  }));

  return (
    <React.Fragment>
      <Typography variant="h6">{SIGNUP_TITLE}</Typography>
      <FormContainer>
        <TextField id="nome" label="Nome" margin="normal" />
        <TextField id="email" label="E-mail" margin="normal" />
        <TextField id="password" label="Senha" margin="normal" type="password" />
        <Button variant="contained" sx={{ marginY: "10px" }}>
          {SIGNUP_BUTTON}
        </Button>
      </FormContainer>
      <Link underline="hover" href="#" textAlign="center">
        {CURRENT_USER}
      </Link>
    </React.Fragment>
  );
}
