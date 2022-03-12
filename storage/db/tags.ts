import { addDoc, collection, getDocs } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

import { db } from "../";

import { TAGS_COLLECTION } from "../constants";

export const AddTag = async (name: string) => {
  try {
    const result = await addDoc(collection(db, TAGS_COLLECTION), {
      name,
    });

    console.log(result);
  } catch (error) {
    console.log((error as FirebaseError).message);
  }
};

export const GetTags = async () => {
  try {
    const tagsList = await getDocs(collection(db, "tags"));
    return tagsList;
  } catch (error) {
    console.log((error as FirebaseError).message);
  }
};
