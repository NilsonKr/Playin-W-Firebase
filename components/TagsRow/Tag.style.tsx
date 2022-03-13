import styled from "styled-components";

import { Row } from "@nextui-org/react";

type TagItemProps = {
  selected: boolean;
};

export const TagItemStyled = styled(Row)`
  padding: 0 5px;
  margin: 0 10px;
  width: auto;
  border-radius: 10px;
  background: ${({ selected }: TagItemProps) =>
    selected ? "#0070f3" : "#ff4ecd"};
  cursor: pointer;
`;

export const RowContainer = styled(Row)`
  width: 80%;
  padding-top: 25px;
  margin: 30px auto 0;
  overflow-x: scroll;
`;
