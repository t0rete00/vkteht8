import { initializeApp } from 'firebase/app';
import { getFirestore,collection,addDoc,serverTimestamp,query,onSnapshot,orderBy, querySnapshot } from 'firebase/firestore';

const firebaseConfig = {

};

initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    orderBy,
    MESSAGES
};