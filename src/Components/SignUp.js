import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Typography, styled } from "@mui/material";
import React from "react";
import axios from "axios";

export default function SignUp({ setLogin }) {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [focusPassword, setFocusPassword] = React.useState(false);
  const [focuesEmail, setFocuesEmail] = React.useState(false);
  const [focuesName, setFocusName] = React.useState(true);
  const SIGNUP_BUTTON = "Cadastrar";
  const SIGNUP_TITLE = "Crie uma conta";
  const CURRENT_USER = "Já é cadastrado? Entre na sua conta!";
  const FormContainer = styled("form")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
  }));

  const signup = (e) => {
    e.preventDefault();
    const body = { email, password, name, isUserAdmin: false };
    const request = axios.post(`http://127.0.0.1:8000/users`, body);

    setLoading(true);

    request.then((response) => {
      setLogin(true);
    });

    request.catch((error) => {
      setLoading(false);
      if (error.response.status === 401)
        alert("Falha no login, email ou senha incorretos!");
    });
  }

  return (
    <React.Fragment>
      <Typography variant="h6">{SIGNUP_TITLE}</Typography>
      <FormContainer onSubmit={signup}>
        <TextField
          id="nome"
          label="Nome"
          margin="normal"
          disabled={loading}
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus={focuesName}
          onClick={() => {
            setFocuesEmail(false);
            setFocusPassword(false);
            setFocusName(true);
          }}
        />
        <TextField
          id="email"
          label="E-mail"
          margin="normal"
          value={email}
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus={focuesEmail}
          onClick={() => {
            setFocuesEmail(true);
            setFocusPassword(false);
            setFocusName(false);
          }}
        />
        <TextField
          id="password"
          label="Senha"
          margin="normal"
          type="password"
          disabled={loading}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus={focusPassword}
          onClick={() => {
            setFocuesEmail(false);
            setFocusPassword(true);
            setFocusName(false);
          }}
        />
        <Button variant="contained" sx={{ marginY: "10px" }} type="submit">
          {SIGNUP_BUTTON}
        </Button>
      </FormContainer>
      <Link underline="hover" onClick={() => setLogin(true)} textAlign="center">
        {CURRENT_USER}
      </Link>
    </React.Fragment>
  );
}
