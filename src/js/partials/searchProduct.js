import { getFirestore, collection, getDocs } from 'firebase/firestore';

export async function searchProduct(app) {
  console.log();
  // --refs----
  const collectionName = ['Stock', 'Seasonal', 'Present'];
  const db = getFirestore(app);

  async function getAllDocuments(title) {
    try {
      const querySnapshot = await getDocs(collection(db, title));
      let firestoreArray = [];

      querySnapshot.forEach(doc => {
        firestoreArray.push({ id: doc.id, ...doc.data() });
      });

      return firestoreArray;
    } catch (error) {
      console.error('Error getting documents:', error);
      return [];
    }
  }

  let allDocuments = [];

  for (const title of collectionName) {
    const documents = await getAllDocuments(title);
    allDocuments.push(...documents);
  }

  filterProduct(allDocuments);
}

function filterProduct(allDocuments) {
  // console.log(allDocuments);

  const searchInput = document.querySelector('.js-header-search-input');

  searchInput.addEventListener('input', () => {
    let searchQuery = searchInput.value.trim();

    if (!searchQuery) return;

    const filteredСards = allDocuments.filter(({ title }) => title.includes(searchQuery));
    const filteredСardTitles = filteredСards.map(({ title }) => title);

    console.log(filteredСardTitles);
  });
}

// const app = initializeApp(firebaseConfig);
// searchProduct(app).then(allDocuments => {
//   console.log(allDocuments); // Тепер тут будуть усі документи з Firestore
// });
