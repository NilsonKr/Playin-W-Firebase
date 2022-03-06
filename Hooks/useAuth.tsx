import { useContext } from "react";
import {
  signIn as signInAuth,
  registerWithEmail,
  logoutAuth,
} from "../storage/auth/";
import { getAuth } from "firebase/auth";

import { userContext } from "../context/UserContext";

import { AuthMethodsReturn } from "../types/index";

export const useAuth = () => {
  const { currentUser, updateUser } = useContext(userContext);
  const auth = getAuth();

  //Login
  const signIn = async (
    email: string,
    pswd: string
  ): Promise<AuthMethodsReturn> => {
    const result = await signInAuth(auth, email, pswd);

    if (result.success) {
      updateUser!(result.user!);
    }

    return result;
  };

  //Create new account
  const createAccount = (email: string, pswd: string, username: string) => {
    return registerWithEmail(auth, email, pswd, username);
  };

  //Logout
  const logout = async () => {
    const result = await logoutAuth(auth);

    if (result.success) {
      updateUser!(null);
    }
  };

  return { currentUser, signIn, createAccount, logout };
};
