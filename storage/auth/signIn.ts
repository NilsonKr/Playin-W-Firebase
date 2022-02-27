import { signInWithEmailAndPassword, Auth } from "firebase/auth";
import { AuthMethodsReturn } from "../../types/";

export const signIn = async (
  getAuth: Auth,
  email: string,
  password: string
): Promise<AuthMethodsReturn> => {
  try {
    const { user } = await signInWithEmailAndPassword(getAuth, email, password);

    if (user.emailVerified) {
      return { success: true, message: null, user };
    } else {
      return { success: false, message: "Please, do the email verification." };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "" };
  }
};
