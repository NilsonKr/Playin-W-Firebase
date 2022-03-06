import { useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
//UI
import { Grid, Button } from "@nextui-org/react";

import SignInModal from "../SignIn";
import SignUpModal from "../SignUp";

export const Header = () => {
  const { logout, currentUser } = useAuth();
  const [modal, setModal] = useState<string>("");

  const toggleModal = (newModal: string) => {
    if (newModal === "logout") {
      return logout();
    }

    setModal((prev) => (prev === newModal ? "" : newModal));
  };

  return (
    <>
      <Grid.Container
        justify="flex-end"
        style={{ marginTop: 30, padding: "0 50px" }}
      >
        <Button
          onClick={() => toggleModal(currentUser ? "logout" : "sign_in")}
          shadow
          color={currentUser ? "error" : "primary"}
          auto
        >
          {currentUser ? "Log out" : "Sign In"}
        </Button>
      </Grid.Container>
      <SignInModal
        redirect={() => toggleModal("sign_up")}
        open={modal === "sign_in"}
        handleClose={() => toggleModal("")}
      />
      <SignUpModal
        open={modal === "sign_up"}
        handleClose={() => toggleModal("")}
      />
    </>
  );
};
