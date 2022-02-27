import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";

export type GetAuthMethod = (app?: FirebaseApp) => Auth;
