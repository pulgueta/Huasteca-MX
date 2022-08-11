import { auth } from "../../firebase";
import { updateEmail, reauthenticateWithCredential } from "firebase/auth";
import { passwordUser } from "../../components";

export async function UpdateEmail(email) {
    // console.log(passwordUser);
    const user = auth.currentUser;
    const credential = {
        email: auth.currentUser.email,
        password: passwordUser
    }

    reauthenticateWithCredential(user, credential).then(() => {
        // User re-authenticated.
    }).catch((error) => {
        // An error ocurred
        // ...
    });

    await updateEmail(auth.currentUser, email).then(() => {
        console.log('Email updated!')
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
    });
}
