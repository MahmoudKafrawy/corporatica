import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOFYxtopRoiSP2apWTNETcuXQS3aolGi0",
  authDomain: "wardlin-11ed5.firebaseapp.com",
  projectId: "wardlin-11ed5",
  storageBucket: "wardlin-11ed5.appspot.com",
  messagingSenderId: "479957982348",
  appId: "1:479957982348:web:b5000877c3f2d38f262fa9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export { app as firebaseApp };
