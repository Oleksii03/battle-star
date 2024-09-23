export function cardsMarkupForum(arr) {
  const forumSliderContainer = document.querySelector('.js-main-swiper-forum');
  // ----refs------------
  const markup = arr.map(({ title, description, img: { png, webp } }) => {
    return `
      <div class="swiper-slide">
            <div class="main__slide-forum">
              <div class="main__slide-forum-picture-wrapper">
                <div class="main__slide-forum-img-wrapper">
                  <div class="main__slide-forum-img-overlay"></div>
                  <picture class="main__slide-forum-picture">
                    <source
                      srcset=${webp ? `${webp}` : 'https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.png?alt=media&token=69e0e0b2-fd05-421a-a13e-ce96a894acc6'}
                      type="image/webp" />

                    <img
                      class="main__slide-forum-img"
                      width="412"
                      height="343"
                      loading="lazy"
                      src=${png ? `${png}` : 'https://firebasestorage.googleapis.com/v0/b/flowers-4b1a5.appspot.com/o/pages%2F404%2Fplaceholder-404.png?alt=media&token=69e0e0b2-fd05-421a-a13e-ce96a894acc6'}
                      alt="${title}" />
                  </picture>
                </div>
              </div>

              <div class="main__slide-forum-text">
                <p class="main__slide-forum-title">${title}</p>

                <p class="main__slide-forum-description">${description}</p>
              </div>
            </div>
          </div>`;
  });
  forumSliderContainer.innerHTML = markup.join('');
}
