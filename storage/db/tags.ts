import {
  doc,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import { FirebaseError } from "firebase/app";

import { db } from "../";

import { TAGS_COLLECTION } from "../constants";

export const AddTag = async (name: string) => {
  try {
    await addDoc(collection(db, TAGS_COLLECTION), {
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

export const DeleteTag = (id: string) => deleteDoc(doc(db, `tags/${id}`));
