import styled, { StyledProps } from "styled-components";

export const StyledDropZone = styled.div`
  width: 100%;
  border: 1px dashed #f94eff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
`;

type ProgressProps = {
  percentage: number;
};

export const StyledProgressBar = styled.div<StyledProps<ProgressProps>>`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(0, 144, 255, 1) 0%,
    rgba(255, 0, 243, 1) 100%
  );

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      to right,
      transparent ${({ percentage }) => `${percentage}%`},
      rgb(17 17 17) 0%
    );
    transition: background 0.6s linear;
  }
`;
