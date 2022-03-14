import { useState } from "react";
//UI
import { MdCancel } from "react-icons/md";
import { Container, Row, Text, Tooltip, Button } from "@nextui-org/react";
import { TagItemStyled } from "./Tag.style";

type Props = {
  id: string;
  label: string;
  selected: boolean;
  select: () => void;
  remove: (id: string) => void;
};

type DeleteProps = {
  remove: () => void;
  label: string;
  close: () => void;
};

const DeleteTooltip = ({ label, close, remove }: DeleteProps) => {
  return (
    <Container xs display="flex" direction="column" alignItems="center">
      <Text h3 size="1.1rem">
        Delete "{label}"
      </Text>
      <Text margin="10px 0">Are you sure to continue</Text>
      <Row style={{ width: 300 }} justify="space-between">
        <Button size="sm" light onClick={close}>
          Cancel
        </Button>
        <Button size="sm" color="error" flat onClick={remove}>
          Delete
        </Button>
      </Row>
    </Container>
  );
};

export const TagItem = ({ id, label, selected, select, remove }: Props) => {
  const [isDelete, setDelete] = useState<boolean>(false);

  const deleteHandler = () => {
    remove(id);
    setDelete(false);
  };

  return (
    <TagItemStyled selected={selected} align="center" onClick={select}>
      <Text color="white">{label}</Text>
      <Tooltip
        visible={isDelete}
        color="secondary"
        trigger="click"
        content={
          <DeleteTooltip
            remove={deleteHandler}
            close={() => setDelete(false)}
            label={label}
          />
        }
      >
        <MdCancel
          color="black"
          size="20px"
          style={{ cursor: "pointer" }}
          onClick={(ev) => {
            ev.stopPropagation();
            setDelete((prev) => !prev);
          }}
        />
      </Tooltip>
    </TagItemStyled>
  );
};
