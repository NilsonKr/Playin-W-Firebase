import { useCallback } from "react";
import { signIn as signInAuth, registerWithEmail } from "../storage/auth/";
import { getAuth } from "firebase/auth";

export const useAuth = () => {
  const auth = getAuth();

  const signIn = (email: string, pswd: string) => {
    return signInAuth(auth, email, pswd);
  };

  const createAccount = (email: string, pswd: string, username: string) => {
    return registerWithEmail(auth, email, pswd, username);
  };

  return { signIn, createAccount };
};
