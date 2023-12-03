import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Typography, styled } from "@mui/material";
import React from "react";

export default function UserProfile() {
  const UPDATE_PASSWORD_BUTTON = "Alterar senha";
  const PROFILE_TITLE = "Perfil";
  const PROFILE_NAME = "Nome: ";
  const PROFILE_EMAIL = "E-mail: ";
  const FormContainer = styled(FormControl)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
  }));

  return (
    <React.Fragment>
      <Typography variant="h5">{PROFILE_TITLE}</Typography>
      <Typography variant="h6">{PROFILE_NAME}</Typography>
      <Typography variant="h6">{PROFILE_EMAIL}</Typography>
      <FormContainer>
        <TextField id="password" label="Alterar senha" margin="normal" type="password" />
        <Button variant="contained" sx={{ marginY: "10px" }}>
          {UPDATE_PASSWORD_BUTTON}
        </Button>
      </FormContainer>
    </React.Fragment>
  );
}
