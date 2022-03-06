import React, { useContext } from "react";
import { userContext } from "../context/UserContext";
//UI
import { Container, Text, Row } from "@nextui-org/react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const index = () => {
  const { currentUser } = useContext(userContext);

  return (
    <Container
      display="flex"
      direction="column"
      alignItems="center"
      sm
      style={{ padding: "30px 0 0", height: "100vh" }}
    >
      <Header />
      {currentUser && (
        <Row align="center" justify="center" style={{ margin: "15px 0" }}>
          <Text
            h1
            size={40}
            css={{
              textGradient: "45deg, $purple500 -20%, $pink500 100%",
            }}
            color="#ff4ecd"
            weight="bold"
          >
            Your Videos !{" "}
          </Text>
          <Text
            h2
            margin="0 0 0 10px"
            size={38}
            css={{
              textGradient: "45deg, $purple500 -20%, $pink500 100%",
            }}
            color="#f94eff"
            weight="bold"
          >
            {currentUser.displayName}
          </Text>
        </Row>
      )}
      <Main />
      <Footer />
    </Container>
  );
};

export default index;
