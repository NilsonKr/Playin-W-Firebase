import { useState } from "react";
import { AddTag } from "../storage/db/tags";
import { GetTags } from "../storage/db/tags";

type Tag = {
  name: string;
};

export const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [selected, setTagSelected] = useState<string>();

  const selectTag = (id: string) => {
    setTagSelected(id);
  };

  //CRUD ACTIONS
  const createTag = (name: string) => AddTag(name);

  const getTagsList = async () => {
    GetTags((querySnapshot) => {
      const list: Tag[] = [];

      querySnapshot?.docs.forEach((doc) => list.push(doc.data() as Tag));
      setTags(list);
    });
  };

  return { tags, createTag, getTagsList, selectTag, selected };
};
