import app from "./app.js"
import {getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'


export async function subscribeToHellfireClub(subscription) {
    const data_base = getFirestore(app)
    const hellfireClubCollection = collection(data_base, 'hellfire-club')
    const doc_ref = await addDoc(hellfireClubCollection, subscription)
    return doc_ref.id
}
