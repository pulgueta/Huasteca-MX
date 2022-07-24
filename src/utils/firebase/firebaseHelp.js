import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, getDoc, setDoc, deleteField } from 'firebase/firestore'

import { firestore } from "../../firebase";

export async function queryData(collectionName) {
    let queryCollection = collection(firestore, collectionName)
    return await getDocs(queryCollection)
}

export async function queryDoc(collectionName, documentName) {
    let queryCollection = doc(firestore, collectionName, documentName);
    return await getDoc(queryCollection);
}

export async function addDocs(collectionName, data) {
    let queryCollection = collection(firestore, collectionName)
    await addDoc(queryCollection, data);
}

export async function saveDoc(collectionName, documentName, data) {
    await setDoc(doc(firestore, collectionName, documentName), data, { merge: true });
}

export async function updateData(collection, document, collectionObject) {
    const docRef = doc(firestore, collection, document);
    await updateDoc(docRef, collectionObject);
}

export async function DeleteDoc(collectionName, documentName) {
    await deleteDoc(doc(firestore, collectionName, documentName));
}

export async function DeleteField(collectionName, documentName, refId) {
    const fieldRef = doc(firestore, collectionName, documentName);
    await updateDoc(fieldRef, {
        [refId]: deleteField()
    });
}
