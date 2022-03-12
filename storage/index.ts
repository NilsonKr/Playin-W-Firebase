import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { fireBaseConfig } from "./config";

initializeApp(fireBaseConfig);

export const db = getFirestore();
