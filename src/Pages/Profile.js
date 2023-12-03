import * as React from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import UserProfile from "../Components/UserProfile"
import { Box, styled } from "@mui/material";
const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
}));
export default function Profile() {
  return <Container>
    <UserProfile />
  </Container>;
}
