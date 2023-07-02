
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs ,sto} from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAae8B4ALpbcEXbNlRDZfbyePdlJLsXxrc",
    authDomain: "dev-wheels.firebaseapp.com",
    databaseURL: "https://dev-wheels-default-rtdb.firebaseio.com",
    projectId: "dev-wheels",
    storageBucket: "dev-wheels.appspot.com",
    messagingSenderId: "35971005803",
    appId: "1:35971005803:web:b456b111a543439175e02e",
    measurementId: "G-9R61E8FLF2"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
  //firebase.initializeApp(firebaseConfig);

  export { app,auth, db,storage  };
  