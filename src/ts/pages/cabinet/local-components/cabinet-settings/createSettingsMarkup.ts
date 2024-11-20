export function createSettingsMarkup() {
  return `
        <div class="cabinet-settings">
          <div class="cabinet-settings__message">
            <h3 class="cabinet-settings__message-title">Повідомлення</h3>

            <ul class="cabinet-settings__message-list js-message-list">
              <li class="cabinet-settings__message-item">
                <div class="cabinet-settings__message-item-switch js-item-message-switch"></div>
                <p class="cabinet-settings__message-item-text">Новини платформи</p>
              </li>

              <li class="cabinet-settings__message-item">
                <div
                  class="cabinet-settings__message-item-switch js-item-message-switch"></div>
                <p class="cabinet-settings__message-item-text">Нові турніри</p>
              </li>
              <li class="cabinet-settings__message-item">
                <div class="cabinet-settings__message-item-switch js-item-message-switch"></div>
                <p class="cabinet-settings__message-item-text">Вхідні повідомлення</p>
              </li>
              <li class="cabinet-settings__message-item">
                <div class="cabinet-settings__message-item-switch js-item-message-switch"></div>
                <p class="cabinet-settings__message-item-text">Запрошення до команди</p>
              </li>
              <li class="cabinet-settings__message-item">
                <div class="cabinet-settings__message-item-switch js-item-message-switch"></div>
                <p class="cabinet-settings__message-item-text">Запити у друзі</p>
              </li>
            </ul>
          </div>

          <!-- settings__invitations -->
          <div class="cabinet-settings__invitations">
            <h3 class="cabinet-settings__invitations-title">Запрошення до команди</h3>

            <ul class="cabinet-settings__invitations-list js-invitations-list">
              <li class="cabinet-settings__invitations-item">
                <div
                  class="cabinet-settings__invitations-item-switch cabinet-settings__invitations-item-switch_active js-item-invitations-switch"></div>
                <p class="cabinet-settings__invitations-item-text">Дозволити лише від друзів</p>
              </li>
            </ul>
          </div>

          <!-- language -->
          <div class="cabinet-settings__language">
            <h3 class="cabinet-settings__language-title">Мова інтерфейсу</h3>

            <div class="cabinet-settings__language-box">
              <p class="cabinet-settings__language-box-title">Мова</p>

              <ul class="cabinet-settings__language-list">
                <li class="cabinet-settings__language-item">
                  <div class="cabinet-settings__language-item-title-box js-language-item-title-box">
                    <p class="cabinet-settings__language-item-title js-language-item-title">Українська</p>

                    <svg
                      class="cabinet-settings__language-item-title-icon"
                      width="25"
                      height="25">
                      <use xlink:href="#icon-arrow-down"></use>
                    </svg>
                  </div>

                  <ul class="cabinet-settings__language-inner-list js-language-inner-list">
                    <li class="cabinet-settings__language-inner-item">Українська</li>
                    <li class="cabinet-settings__language-inner-item">Аронглійська</li>
                    <li class="cabinet-settings__language-inner-item">Російська</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <!-- Region -->
          <div class="cabinet-settings__region">
            <h3 class="cabinet-settings__region-title">Регіон</h3>

            <div class="cabinet-settings__region-box">
              <p class="cabinet-settings__region-box-title">Регіон</p>

              <ul class="cabinet-settings__region-list">
                <li class="cabinet-settings__region-item">
                  <div class="cabinet-settings__region-item-title-box js-region-item-title-box">
                    <img
                      width="34"
                      height="22"
                      class="cabinet-settings__region-item-img js-region-item-img"
                      loading="lazy"
                      src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fsettings%2Fflag-Ukraine.svg?alt=media&token=72482342-f473-4850-8428-ff8e93e9986c"
                      alt="прапор країни" />

                    <p class="cabinet-settings__region-item-title js-active-title">Україна</p>

                    <svg
                      class="cabinet-settings__region-item-title-icon"
                      width="25"
                      height="25">
                      <use xlink:href="#icon-arrow-down"></use>
                    </svg>
                  </div>

                  <ul class="cabinet-settings__region-inner-list js-region-inner-list">
                    <li
                      class="cabinet-settings__region-inner-item"
                      data-src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fsettings%2Fflag-Ukraine.svg?alt=media&token=72482342-f473-4850-8428-ff8e93e9986c">
                      Україна
                    </li>
                    <li
                      class="cabinet-settings__region-inner-item"
                      data-src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fsettings%2Fflag-Austria.svg?alt=media&token=34c00985-a901-4a23-bb9e-59741abd2fb1">
                      Австралія
                    </li>
                    <li
                      class="cabinet-settings__region-inner-item"
                      data-src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fsettings%2Fflag-Afganistan.svg?alt=media&token=42bc0b54-58c8-4e0b-8ff3-d1e61f17d58b">
                      Афганістан
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <!-- accounts -->
          <div class="cabinet-settings__accounts">
            <h3 class="cabinet-settings__accounts-title">Прив'язати обліковий запис</h3>

            <ul class="cabinet-settings__accounts-list js-accounts-list">
              <li class="cabinet-settings__accounts-item">
                <p class="cabinet-settings__accounts-item-title">Steam</p>

                <div class="cabinet-settings__accounts-item-box">
                  <div class="cabinet-settings__accounts-item-box-icon"></div>

                  <p class="cabinet-settings__accounts-item-box-text">VERITA_Luts</p>
                </div>
              </li>

              <li class="cabinet-settings__accounts-item">
                <p class="cabinet-settings__accounts-item-title">Google</p>

                <div class="cabinet-settings__accounts-item-box">
                  <div class="cabinet-settings__accounts-item-box-icon"></div>

                  <p class="cabinet-settings__accounts-item-box-text">Example@mail.com</p>
                </div>
              </li>

              <li class="cabinet-settings__accounts-item">
                <p class="cabinet-settings__accounts-item-title">Facebook</p>

                <p class="cabinet-settings__accounts-item-box-text_accent">Прив'язати</p>
              </li>
            </ul>
          </div>

          <!-- Change password -->
          <div class="cabinet-settings__password">
            <h3 class="cabinet-settings__password-title">Змінити пароль</h3>

            <p class="cabinet-settings__password-change"><a href="#">Змінити</a></p>
          </div>

          <!-- Log out of the account -->

          <div class="cabinet-settings__logout">
            <button class="cabinet-settings__logout-btn js-logout-btn">
              <svg
                width="24"
                height="24">
                <use xlink:href="#icon-exit-arrow"></use>
              </svg>
              <span>Вийти з облікового запису</span>
            </button>
          </div>
        </div>`;
}
