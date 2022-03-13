import { useState } from "react";
//UI
import { MdCancel } from "react-icons/md";
import { Row, Text, Tooltip } from "@nextui-org/react";
import { TagItemStyled } from "./Tag.style";

type Props = {
  label: string;
  selected: boolean;
  select: () => void;
};

export const TagItem = ({ label, selected, select }: Props) => {
  const [isDelete, setDelete] = useState<boolean>(false);

  return (
    <TagItemStyled selected={selected} align="center" onClick={select}>
      <Text color="white">{label}</Text>
      <MdCancel
        color="black"
        size="20px"
        style={{ cursor: "pointer" }}
        onClick={() => setDelete((prev) => !prev)}
      />
    </TagItemStyled>
  );
};
