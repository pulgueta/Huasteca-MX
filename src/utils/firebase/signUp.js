import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            return user
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ..
        });
}