import { useState } from "react";
import { AddTag } from "../storage/db/tags";
import { GetTags } from "../storage/db/tags";

type Tag = {
  name: string;
};

export const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  const createTag = (name: string) => AddTag(name);

  const getTagsList = async () => {
    const list: Tag[] = [];
    const querySnapshot = await GetTags();

    querySnapshot?.docs.forEach((doc) => list.push(doc.data() as Tag));
    setTags(list);
  };

  return { tags, createTag, getTagsList };
};
