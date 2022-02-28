import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword, Auth } from "firebase/auth";
import { AuthMethodsReturn } from "../../types/";

const errors: { [k: string]: string } = {
  "auth/invalid-email": "Invalid E-mail",
  "auth/wrong-password": "Invalid Password",
};

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
    const { code } = <FirebaseError>error;
    return { success: false, message: errors[code] };
  }
};
