import React from "react";
//UI
import { Container, Text, Link } from "@nextui-org/react";

export const Footer = () => {
  return (
    <Container
      display="flex"
      justify="space-between"
      alignItems="center"
      style={{ marginTop: "auto", height: 50, borderTop: "1px solid #c7c7c7" }}
    >
      <Text style={{ marginTop: 0 }}>
        Made with 💜 By{" "}
        <Link
          href="https://github.com/NilsonKr/Playin-W-Firebase"
          target="_blank"
          style={{ color: "#ff8edf", marginLeft: 5 }}
        >
          NilsonKr
        </Link>
      </Text>
      <Text color="#dbdbdb" style={{ marginTop: 0 }}>
        Built with Next.js, NextUI & Firebase 🤍
      </Text>
    </Container>
  );
};
