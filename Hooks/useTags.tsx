import { useState } from "react";
import { GetTags, DeleteTag, AddTag } from "../storage/db/tags";

type Tag = {
  id: string;
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

      querySnapshot?.docs.forEach((doc) =>
        list.push({ ...(doc.data() as Tag), id: doc.id })
      );
      setTags(list);
    });
  };

  const removeTag = (id: string) => DeleteTag(id);

  return { tags, createTag, getTagsList, removeTag, selectTag, selected };
};
