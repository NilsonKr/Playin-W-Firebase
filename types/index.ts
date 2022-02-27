import { FirebaseApp } from "firebase/app";
import { Auth, User } from "firebase/auth";

export type GetAuthMethod = (app?: FirebaseApp) => Auth;

export type AuthMethodsReturn = {
  success: boolean;
  message: null | string;
  user?: User;
};
