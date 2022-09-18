import { signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from "../../firebase";
export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      return user
    })
    .catch((err) => console.log(err.message));
};

export const logOut = () => {
  signOut(auth).then(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("rol");
    window.location.reload();
  }).catch((error) => {
    // An error happened.
    console.log('error', error)
  });
}