import React from "react";
//UI
import { MainContainer } from "./Main.style";

export const Main = () => {
  return (
    <MainContainer>
      <video src="/assets/sample.mp4" controls></video>
    </MainContainer>
  );
};
