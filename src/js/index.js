import { header } from './partials/header';
import { mobMenu } from './partials/mob-menu';
import { initSwiper } from './partials/swiper';

// ==============================

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

document.addEventListener('DOMContentLoaded', () => {
  header();
  mobMenu();
  initSwiper();

  // =====================

  // https://firebase.google.com/docs/web/setup#available-libraries

  // const firebaseConfig = {
  //   apiKey: 'AIzaSyCeoo8r7oEqKQs1O_YxVO2RAd8WWV3HWso',
  //   authDomain: 'flowers-4b1a5.firebaseapp.com',
  //   projectId: 'flowers-4b1a5',
  //   storageBucket: 'flowers-4b1a5.appspot.com',
  //   messagingSenderId: '719757325067',
  //   appId: '1:719757325067:web:6e609ba7f0d37bdd23e80e',
  // };

  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);

  // async function getAllDocuments() {
  //   const querySnapshot = await getDocs(collection(db, 'Stock'));
  //   const stockArray = [];
  //   querySnapshot.forEach(doc => {
  //     stockArray.push(doc.data());
  //   });
  //   return stockArray;
  // }

  // async function markUp() {
  //   const arr = await getAllDocuments();

  //   const newArr = arr.map(doc => {
  //     return `
  //     <div class="product-card">
  //       <img src="${doc.img}" alt="${doc.title}">
  //       <h2>${doc.type}</h2>
  //     </div>`;
  //   });

  //   document.body.insertAdjacentHTML('beforeend', newArr.join(''));
  // }

  // markUp();
});
