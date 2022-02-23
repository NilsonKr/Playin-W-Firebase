import styled from "styled-components";

type VideoProps = { isSelected?: boolean };

export const MainContainer = styled.main`
  box-sizing: border-box;
  width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow-x: hidden;
  padding: 0 100px;
  gap: 35px;
`;

export const StyledVideo = styled.video<VideoProps>`
  width: 100%;
  height: ${({ isSelected }) => (isSelected ? "350px" : "240px")};
  transition: all 0.3s linear;
`;
