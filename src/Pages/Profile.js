import * as React from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import UserProfile from "../Components/UserProfile";
import UserContext from "../Context/UserContext";
import { FormContainer } from "../styles/components";

export default function Profile() {
  const { user, setUser } = React.useContext(UserContext);
  const [login, setLogin] = React.useState(true);

  return (
    <FormContainer>
      {user ? (
        <UserProfile user={user} />
      ) : login ? (
        <Login setLogin={setLogin} setUser={setUser} />
      ) : (
        <SignUp setLogin={setLogin} />
      )}
    </FormContainer>
  );
}
