export function updateHeartStatus(cardId) {
  const currentCard = document.querySelector(`[data-id="${cardId}"]`);

  if (!currentCard) return;

  const activeHeart = currentCard.querySelector('.slide-stock__content-top-favorite_active');
  activeHeart.classList.remove('slide-stock__content-top-favorite_active');
}
