import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAd5LeDQLc4i5UEZgy049Nmu5687cFRTFU',
  authDomain: 'battlestar-514be.firebaseapp.com',
  projectId: 'battlestar-514be',
  storageBucket: 'battlestar-514be.appspot.com',
  messagingSenderId: '1041425711014',
  appId: '1:1041425711014:web:b36feae118870e4d2c5967',
};

const app = initializeApp(firebaseConfig);

export { app };
