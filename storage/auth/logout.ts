import { FirebaseError } from "firebase/app";
import { signOut, Auth } from "firebase/auth";
import { AuthMethodsReturn } from "../../types";

export const logoutAuth = async (getAuth: Auth): Promise<AuthMethodsReturn> => {
  try {
    await signOut(getAuth);

    return { success: true, message: null };
  } catch (error) {
    const { message } = <FirebaseError>error;
    return { success: false, message };
  }
};
