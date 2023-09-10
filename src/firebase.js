import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKED,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGIN_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
});

export default app;
