import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  Auth,
  updateProfile,
  signOut,
} from "firebase/auth";

type ReturnResponse = { success: boolean; message: string | null };

export const registerWithEmail = async (
  getAuth: Auth,
  email: string,
  password: string,
  username: string
): Promise<ReturnResponse> => {
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
    console.log(error);
    return { success: false, message: null };
  }
};
