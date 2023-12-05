import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Typography, styled } from "@mui/material";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import FormControlContext from "@mui/material/FormControl/FormControlContext";

export default function Login({ setLogin, setUser }) {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [focusPassword, setFocusPassword] = React.useState(false);
  const [focuesEmail, setFocuesEmail] = React.useState(true);
  const navigate = useNavigate();
  const LOGIN_BUTTON = "Entrar";
  const LOGIN_TITLE = "Entre na sua conta";
  const NOT_USER = "Não possui uma conta? Cadastre-se!";
  const FormContainer = styled("form")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
  }));

  function login(e) {
    e.preventDefault();
    const body = { email, password };
    const request = axios.get(`http://127.0.0.1:8000/users`, body);

    setLoading(true);
    console.log(body)

    request.then((response) => {
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    });

    request.catch((error) => {
      setLoading(false);
      if (error.response.status === 401)
        alert("Falha no login, email ou senha incorretos!");
    });
  }

  return (
    <React.Fragment>
      <Typography variant="h6">{LOGIN_TITLE}</Typography>
      <FormContainer onSubmit={login}>
        <TextField
          id="email"
          label="E-mail"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={loading}
          autoFocus={focuesEmail}
          onClick={() => {
            setFocuesEmail(true)
            setFocusPassword(false)
          }}
        />
        <TextField
          id="password"
          label="Senha"
          margin="normal"
          type="password"
          value={password}
          disabled={loading}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus={focusPassword}
          onClick={() => {
            setFocuesEmail(false)
            setFocusPassword(true)
          }}
        />
        <Button variant="contained" type="submit" sx={{ marginY: "10px" }}>
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
