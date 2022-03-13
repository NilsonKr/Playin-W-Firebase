import { useState, useEffect } from "react";
import { useTags } from "../../Hooks/useTags";
import { useForm } from "../../Hooks/useForm";
//UI
import { FaCloudUploadAlt, FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Row, Input, Button } from "@nextui-org/react";
import { RowContainer } from "./Tag.style";
//Components
import { TagItem } from "./TagItem";

export const TagsRow = () => {
  const [isNew, setNew] = useState<boolean>();
  const { tags, createTag, getTagsList, selectTag, selected } = useTags();
  const { form: newTag, handleChange } = useForm({ name: "" });

  useEffect(() => {
    getTagsList();
  }, []);

  const handleCreate = async () => {
    const isCreated = await createTag(newTag.name);

    if (isCreated) {
      setNew(false);
      handleChange("", "name");
    }
  };

  return (
    <RowContainer style={{}} align="center">
      <FaCloudUploadAlt
        size="40px"
        color="#7928c9"
        style={{ minWidth: 40, cursor: "pointer", marginRight: 10 }}
        onClick={() => setNew((prev) => !prev)}
      />

      {isNew && (
        <Row style={{ minWidth: 300 }} fluid={false} align="center">
          <Input
            underlined
            color="secondary"
            labelPlaceholder="Tag name"
            onChange={(e) => handleChange(e.target.value, "name")}
          />
          <Button
            onClick={handleCreate}
            style={{ margin: "0 15px" }}
            auto
            icon={<FaCheck size="20px" />}
            color="success"
            flat
          />
          <Button
            onClick={() => setNew(false)}
            auto
            color="error"
            icon={<IoIosClose size="40px" />}
            flat
          />
        </Row>
      )}

      {tags.map((tag, i) => (
        <TagItem
          label={tag.name}
          selected={selected === i.toString()}
          select={() =>
            selectTag(selected === i.toString() ? "" : i.toString())
          }
        />
      ))}
    </RowContainer>
  );
};
