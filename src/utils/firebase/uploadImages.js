import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const UploadImages = async (collectionName, data) => {
    const arrayImages = []
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const imageRef = ref(storage, `${collectionName}/${new Date().getTime() + element.name}`)
        await uploadBytes(imageRef, element).then((response) => {
            getDownloadURL(response.ref).then((url) => arrayImages.push(url))
            console.log('status OK')
        }).catch((err) => console.log(err))
    }
    return arrayImages
}
