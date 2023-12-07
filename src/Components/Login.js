import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { FormBox } from "../styles/components";

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

  function login(e) {
    e.preventDefault();
    if(!email.trim() || !password.trim()){
      return alert("Não foi possível entrar na conta. Tente novamente.")
    }
    const requestUser = axios.get(`http://127.0.0.1:8000/users/`);
    setLoading(true);

    requestUser.then((response) => {
      const user = response.data.find(u => u.email === email)
      if(!user){
        setLoading(false);
        return alert("Usuário ou senha incorretos, tente novamente.")
      }
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    });

    requestUser.catch((error) => {
      setLoading(false);
      if (error.response.status === 401)
        alert("Falha no login, email ou senha incorretos!");
    });
  }

  return (
    <React.Fragment>
      <Typography variant="h6">{LOGIN_TITLE}</Typography>
      <FormBox onSubmit={login}>
        <TextField
          id="email"
          label="E-mail"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={loading}
          autoFocus={focuesEmail}
          onClick={() => {
            setFocuesEmail(true);
            setFocusPassword(false);
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
            setFocuesEmail(false);
            setFocusPassword(true);
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ marginY: "10px" }}
          disabled={loading}
        >
          {LOGIN_BUTTON}
        </Button>
      </FormBox>
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
