import { useState } from "react";
//UI
import { Grid, Button } from "@nextui-org/react";

import SignInModal from "../SignIn";

export const Header = () => {
  const [modal, setModal] = useState<string>("");

  const toggleModal = (newModal: string) => {
    setModal((prev) => (prev === newModal ? "" : newModal));
  };

  return (
    <>
      <Grid.Container
        justify="flex-end"
        style={{ marginTop: 30, padding: "0 50px" }}
      >
        <Button
          onClick={() => toggleModal("sign_in")}
          shadow
          color="primary"
          auto
        >
          Sign In
        </Button>
      </Grid.Container>
      <SignInModal
        signIn={() => {}}
        open={modal === "sign_in"}
        handleClose={() => setModal("")}
      />
    </>
  );
};
