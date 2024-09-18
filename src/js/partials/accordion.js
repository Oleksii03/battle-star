// export function createAccordionFaq() {
//   const accordionList = document.querySelector('.js-list-faq');
//   const contentList = document.querySelectorAll('.js-title-content');

//   accordionList.addEventListener('click', onToggleAccordion);
//   function onToggleAccordion(e) {
//     const targetEl = e.target.closest('.js-title-content');

//     if (!targetEl) return;

//     let content = targetEl.nextElementSibling;
//     targetEl.classList.toggle('list-faq__title-content_active');

//     if (targetEl.classList.contains('list-faq__title-content_active')) {
//       contentList.forEach(el => {
//         el.classList.remove('list-faq__title-content_active');
//         el.nextElementSibling.style.maxHeight = 0;
//       });

//       content.style.maxHeight = content.scrollHeight + 'px';
//       targetEl.classList.add('list-faq__title-content_active');
//       return;
//     }

//     content.style.maxHeight = 0;
//   }
// }
