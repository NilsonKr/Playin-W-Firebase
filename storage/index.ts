import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { fireBaseConfig } from "./config";

initializeApp(fireBaseConfig);

export const db = getFirestore();

export const storage = getStorage();
