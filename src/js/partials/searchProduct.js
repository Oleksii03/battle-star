import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { cardsMarkup } from '../pages/main/cards-markup';

export async function searchProduct(app) {
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
  const searchInput = document.querySelector('.js-header-search-input');
  const searchList = document.querySelector('.js-header-search-input-list');
  const productCatalog = document.querySelector('.js-main-hero-product-catalog');
  const productCatalogTitle = document.querySelector('.js-main-hero-product-catalog-title');
  const mainHeroContainer = document.querySelector('.js-main-hero-container');
  // ---refs-------

  searchInput.addEventListener('input', () => {
    let searchQuery = searchInput.value.trim().toLowerCase();

    if (!searchQuery) {
      searchList.innerHTML = '';
      productCatalogTitle.style.display = 'none';
      productCatalog.classList.remove('main-hero__product-catalog_active');
      mainHeroContainer.style.display = 'block';
      searchList.innerHTML = '';
      productCatalog.innerHTML = '';
      return;
    }

    const filteredСards = allDocuments.filter(({ title }) =>
      title.toLowerCase().includes(searchQuery)
    );

    if (!filteredСards.length) return;

    productCatalog.classList.add('main-hero__product-catalog_active');

    cardsMarkup(filteredСards, productCatalog);

    let markupList = filteredСards.map(({ title }) => {
      return `
          <li class="header__search-input-item">
            <p class="header__search-input-item-title js-search-list-item-title">
             ${title}
            </p>
          </li>`;
    });

    searchList.innerHTML = [...new Set(markupList)].join('');
  });

  // ---searchSelectedProduct-----
  searchList.addEventListener('click', searchSelectedProduct);

  function searchSelectedProduct({ target }) {
    if (!target.classList.contains('js-search-list-item-title')) return;

    const selectedTitle = target.textContent.trim();

    console.log(selectedTitle);

    const selectedСards = allDocuments.filter(
      ({ title }) => title.toLowerCase() === selectedTitle.toLowerCase()
    );

    searchInput.value = selectedTitle;

    cardsMarkup(selectedСards, productCatalog);
    productCatalogTitle.style.display = 'block';
    mainHeroContainer.style.display = 'none';
    searchList.innerHTML = '';
  }

  // ---searchInputBlur-----

  searchInput.addEventListener('blur', () => {
    setTimeout(() => {
      searchList.classList.add('header__search-input-list_hidden');
    }, 100);
  });

  searchInput.addEventListener('focus', () => {
    searchList.classList.remove('header__search-input-list_hidden');
  });
}
