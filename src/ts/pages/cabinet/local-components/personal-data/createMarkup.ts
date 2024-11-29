import { formatDate } from '@/ts/components/formatDate';

export function createMarkup(): string {
  const user = JSON.parse(localStorage.getItem('user') ?? '');
  const userImg = localStorage.getItem('userImg') ?? null;
  const formattedDate = formatDate(user.dateRegistration);
  return `
        <div class="cabinet-personal-data">
          <div class="cabinet-personal-data__info">
            <div class="cabinet-personal-data__info-title-box">
              <h3 class="cabinet-personal-data__info-title">Основна інформація</h3>
              <p class="cabinet-personal-data__info-subtitle"><a href="#">Редагувати</a></p>
            </div>

            <div class="cabinet-personal-data__info-body">
              <ul class="cabinet-personal-data__info-body-list">
                <li class="cabinet-personal-data__info-body-item">
                  <p class="cabinet-personal-data__info-body-item-title">ID</p>
                  <p
                    class="cabinet-personal-data__info-body-item-text cabinet-personal-data__info-body-item-text_id">
                    <span>37589023</span>
                    <svg
                      width="18"
                      height="18">
                      <use xlink:href="#icon-copy"></use>
                    </svg>
                  </p>
                </li>

                <li class="cabinet-personal-data__info-body-item">
                  <p class="cabinet-personal-data__info-body-item-title">Нікнейм</p>
                  <p
                    class="cabinet-personal-data__info-body-item-text cabinet-personal-data__info-body-item-text_nick">
                    <span class="js-cabinet-personal-data-nick">${user.displayName}</span>
                  </p>
                </li>

                <li class="cabinet-personal-data__info-body-item">
                  <p class="cabinet-personal-data__info-body-item-title">Био</p>
                  <p
                    class="cabinet-personal-data__info-body-item-text cabinet-personal-data__info-body-item-text_bio">
                    Значимість цих проблем настільки очевидна, що консультація з широким активом
                    сприяє підготовці та реалізації позицій, які займають учасники щодо поставлених
                    завдань.
                  </p>
                </li>

                <li class="cabinet-personal-data__info-body-item">
                  <p class="cabinet-personal-data__info-body-item-title">Дата регистрации</p>
                  <p class="cabinet-personal-data__info-body-item-text">${formattedDate}</p>
                </li>
              </ul>

              <div class="cabinet-personal-data__info-body-photo">
                <img
                  width="140"
                  height="140"
                  loading="lazy"
                  ${userImg ? `src="${userImg}"` : 'https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fpersonal-data%2Fimage-placeholder.webp?alt=media&token=4b207291-d90e-4a4a-b014-d2c27f1e4905'}
                  alt="Фото користувача"
                  class="cabinet-personal-data__info-body-img js-personal-data-img" />

                <form
                  class="cabinet-personal-data__info-body-form"
                  action="/upload"
                  method="post"
                  enctype="multipart/form-data">
                  <label class="form-label js-personal-data-input-img">
                    Змінити
                    <input
                      class="form-label-input"
                      type="file"
                      name="photo" />
                  </label>
                </form>
              </div>
            </div>
          </div>

          <div class="cabinet-personal-data__mail">
            <div class="cabinet-personal-data__info-title-box mail-title-box">
              <h3 class="cabinet-personal-data__info-title">Адреса електронної пошти</h3>
              <p class="cabinet-personal-data__info-subtitle"><a href="#">Редагувати</a></p>
            </div>

            <div class="cabinet-personal-data__mail-body">
              <p class="cabinet-personal-data__mail-body-title">Електронна пошта</p>
              <p class="cabinet-personal-data__mail-body-text">
                <span>${user.email}</span>
                <svg
                  width="24"
                  height="24">
                  <use xlink:href="#icon-check"></use>
                </svg>
              </p>
            </div>
          </div>

          <div class="cabinet-personal-data__steam">
            <div class="cabinet-personal-data__info-title-box steam-title-box">
              <h3 class="cabinet-personal-data__info-title">Обліковий запис Steam</h3>
              <p class="cabinet-personal-data__info-subtitle"><a href="#">Змінити</a></p>
            </div>

            <ul class="cabinet-personal-data__info-body-list">
              <li class="cabinet-personal-data__info-body-item">
                <p class="cabinet-personal-data__info-body-item-title">Электронная почта</p>
                <p class="cabinet-personal-data__info-body-item-text">Example@mail.com</p>
              </li>

              <li class="cabinet-personal-data__info-body-item">
                <p class="cabinet-personal-data__info-body-item-title">Обліковий запис</p>
                <p class="cabinet-personal-data__info-body-item-text">VERITA_Luts</p>
              </li>
            </ul>
          </div>
        </div>`;
}
