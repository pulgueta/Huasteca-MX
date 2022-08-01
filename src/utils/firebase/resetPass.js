import { sendPasswordResetEmail } from "firebase/auth";

import { auth } from "../../firebase";

export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email)
};
