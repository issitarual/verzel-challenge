import * as React from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import UserProfile from "../Components/UserProfile";
import { Box, styled } from "@mui/material";
import UserContext from "../Context/UserContext";

const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
}));

export default function Profile() {
  const { user, setUser } = React.useContext(UserContext);
  const [login, setLogin] = React.useState(true);
  console.log(user)
  return (
    <Container>
      {user ? (
        <UserProfile user={user} />
      ) : login ? (
        <Login setLogin={setLogin} setUser={setUser} />
      ) : (
        <SignUp setLogin={setLogin} />
      )}
    </Container>
  );
}
