import { useState, useEffect } from "react";
import { useTags } from "../../Hooks/useTags";
import { useForm } from "../../Hooks/useForm";
//UI
import { FaCloudUploadAlt, FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Row, Input, Button } from "@nextui-org/react";

export const TagsRow = () => {
  const [isNew, setNew] = useState<boolean>();
  const { tags, createTag, getTagsList } = useTags();
  const { form: newTag, handleChange } = useForm({ name: "" });

  useEffect(() => {
    getTagsList();
  }, []);

  console.log(tags);

  return (
    <Row style={{ width: "80%", margin: "30px auto 0" }} align="center">
      <FaCloudUploadAlt
        size="40px"
        color="#7928c9"
        style={{ cursor: "pointer", marginRight: 20 }}
        onClick={() => setNew((prev) => !prev)}
      />
      {isNew && (
        <Row align="center" gap={3}>
          <Input
            underlined
            color="secondary"
            labelPlaceholder="Tag name"
            onChange={(e) => handleChange(e.target.value, "name")}
          />
          <Button
            onClick={() => createTag(newTag.name)}
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
    </Row>
  );
};
