import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import React from "react";
import UserContext from "../Context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router";
import { FormBox } from "../styles/components";

export default function UserProfile() {
  const UPDATE_PASSWORD_BUTTON = "Alterar senha";
  const PROFILE_TITLE = "Perfil";
  const PROFILE_NAME = "Nome: ";
  const PROFILE_EMAIL = "E-mail: ";

  const { user } = React.useContext(UserContext);
  const [password, setPassword] = React.useState(user?.password);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  function updatePassword(e) {
    e.preventDefault();
    if (!password.trim()) {
      return alert("Insira uma senha válida.");
    }
    const body = { email: user?.email, password };
    const request = axios.patch(`http://127.0.0.1:8000/user/${user?.id}`, body);
    setLoading(true);

    request.then((response) => {
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
      <Typography variant="h5">{PROFILE_TITLE}</Typography>
      <Typography variant="h6">{`${PROFILE_NAME}${user?.name}`}</Typography>
      <Typography variant="h6">{`${PROFILE_EMAIL}${user?.email}`}</Typography>
      <FormBox onSubmit={updatePassword}>
        <TextField
          id="password"
          label="Alterar senha"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus={true}
          onClick={() => {}}
        />
        <Button variant="contained" sx={{ marginY: "10px" }} type="submit">
          {UPDATE_PASSWORD_BUTTON}
        </Button>
      </FormBox>
    </React.Fragment>
  );
}
