import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { FirebaseError } from "firebase/app";

import { db } from "../";

import { TAGS_COLLECTION } from "../constants";

export const AddTag = async (name: string) => {
  try {
    const result = await addDoc(collection(db, TAGS_COLLECTION), {
      name,
    });

    return true;
  } catch (error) {
    console.log((error as FirebaseError).message);
    return false;
  }
};

type SnapshotCallback = (snapshot: QuerySnapshot<DocumentData>) => void;

export const GetTags = (cb: SnapshotCallback) => {
  onSnapshot(collection(db, "tags"), cb);
};
