import React from "react";
//UI
import { Button, Container, Link } from "@nextui-org/react";

const index = () => {
  return (
    <Container
      display="flex"
      fluid
      justify="space-between"
      style={{ height: 100, marginTop: 50 }}
    >
      <Link href="#">Click me!</Link>
      <Link href="#" color="warning">
        Click me!
      </Link>
      <Link href="#" color="secondary">
        Click me!
      </Link>
    </Container>
  );
};

export default index;
