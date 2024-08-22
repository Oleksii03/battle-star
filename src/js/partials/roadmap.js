export function createRoadmap() {
   const contentBlock = document.querySelector('.js-content-block')

   contentBlock.addEventListener('click', onToggleInnerList)
   function onToggleInnerList(e) {
      const { target } = e

      if (!target.classList.contains('js-list-btn-more')) return

      const targrtEl = target.closest('BUTTON')
      const innerList = targrtEl.previousElementSibling

      if (!innerList.classList.contains('list-more__box_active')) {
         innerList.classList.add('list-more__box_active')
         innerList.style.maxHeight = innerList.scrollHeight + 'px'
         targrtEl.firstElementChild.textContent = 'Hide'
         return
      }

      innerList.style.maxHeight = 0
      targrtEl.firstElementChild.textContent = 'More'
      innerList.classList.remove('list-more__box_active')
   }
}
