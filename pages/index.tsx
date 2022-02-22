import React from "react";
//UI
import { Container, Text } from "@nextui-org/react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const index = () => {
  return (
    <Container
      display="flex"
      direction="column"
      alignItems="center"
      sm
      style={{ padding: "30px 0 0", height: "100vh" }}
    >
      <Header />
      <Text
        h1
        margin="30px 0"
        size={40}
        css={{
          textGradient: "45deg, $purple500 -20%, $pink500 100%",
        }}
        color="#ff4ecd"
        weight="bold"
      >
        Your Videos !
      </Text>
      <Main />
      <Footer />
    </Container>
  );
};

export default index;
