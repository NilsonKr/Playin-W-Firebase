import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  Auth,
  updateProfile,
  signOut,
} from "firebase/auth";
import { AuthMethodsReturn } from "../../types/";

export const registerWithEmail = async (
  getAuth: Auth,
  email: string,
  password: string,
  username: string
): Promise<AuthMethodsReturn> => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      getAuth,
      email,
      password
    );

    updateProfile(user, {
      displayName: username,
    });

    signOut(getAuth);

    sendEmailVerification(user, { url: "http://localhost:3000" });

    return { success: true, message: null };
  } catch (error) {
    const { code } = <FirebaseError>error;
    return { success: false, message: code };
  }
};
