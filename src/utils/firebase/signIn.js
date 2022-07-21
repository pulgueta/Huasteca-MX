import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((user) => console.log(user))
    .catch((err) => console.log(err));
};
