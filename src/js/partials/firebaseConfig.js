import { initializeApp } from 'firebase/app';

export function firebaseConfig() {
  return initializeApp({
    apiKey: 'AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso',
    authDomain: 'flowers-4b1a5.firebaseapp.com',
    projectId: 'flowers-4b1a5',
    storageBucket: 'flowers-4b1a5.appspot.com',
    messagingSenderId: '719757325067',
    appId: '1:719757325067:web:6e609ba7f0d37bdd23e80e',
  });
}
