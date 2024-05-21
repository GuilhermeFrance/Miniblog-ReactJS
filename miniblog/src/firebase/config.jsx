import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDJhFHpgaqsHJjgoz0wYuNgI0uNbv-BTak",
  authDomain: "miniblog-aa603.firebaseapp.com",
  projectId: "miniblog-aa603",
  storageBucket: "miniblog-aa603.appspot.com",
  messagingSenderId: "169752597143",
  appId: "1:169752597143:web:5ad28f44c0868c8732cfd2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
