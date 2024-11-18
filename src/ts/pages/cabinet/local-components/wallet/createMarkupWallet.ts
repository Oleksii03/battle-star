import { getDataFromFirestore } from '@/ts/utils/getDataFromFirestore';
import { HISTORY_TRANSACTIONS_LIST } from '@/ts/utils/constants';
import { handleError } from '@/ts/utils/handleError';
import { transactionHistoryList } from './transactionHistoryList';

export function createMarkupWallet(container: HTMLElement) {
  const baseMarkup = `
        <div class="cabinet-wallet">
          <div class="cabinet-wallet__content-top">
            <div class="cabinet-wallet__card">
              <div class="cabinet-wallet__card-bg">
                <img
                  width="500"
                  height="500"
                  class="cabinet-wallet__card-img"
                  src="../../../assets/img/pages/cabinet/wallet/casrd-star-bg.svg"
                  alt="Картка гаманця" />
              </div>

              <svg
                width="61"
                height="61"
                class="cabinet-wallet__card-logo">
                <use xlink:href="#icon-logo"></use>
              </svg>

              <div class="cabinet-wallet__card-chip">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div class="cabinet-wallet__card-personal-data">
                <p class="cabinet-wallet__card-personal-data-id">
                  ID
                  <span>4758 8745</span>
                </p>

                <p class="cabinet-wallet__card-personal-data-name">Max Richter</p>
              </div>
            </div>

            <div class="cabinet-wallet__balance-content">
              <div class="cabinet-wallet__subscription-type">
                <p class="cabinet-wallet__subscription-type-title">Підписка:</p>
                <div class="cabinet-wallet__subscription-type-list-box">
                  <p class="cabinet-wallet__subscription-type-list-title">
                    <span class="subscription-type-list-active-title">Геймер</span>

                    <svg
                      class="subscription-type-list-active-icon"
                      width="24"
                      height="24">
                      <use xlink:href="#icon-arrow-down"></use>
                    </svg>
                  </p>

                  <ul class="cabinet-wallet__subscription-type-list">
                    <li class="cabinet-wallet__subscription-type-item">Геймер</li>
                    <li class="cabinet-wallet__subscription-type-item">Преміум</li>
                  </ul>
                </div>
              </div>

              <div class="cabinet-wallet__balance">
                <p class="cabinet-wallet__balance-title">Баланс</p>
                <p class="cabinet-wallet__balance-amount">
                  15600
                  <span class="currency-symbol">BS</span>
                </p>

                <div class="cabinet-wallet__balance-bg">
                  <img
                    height="180"
                    width="700"
                    loading="lazy"
                    src="https://firebasestorage.googleapis.com/v0/b/battlestar-514be.appspot.com/o/pages%2Fcabinet%2Fwallet%2Fbalance-bg.svg?alt=media&token=aa40560f-504a-48cf-8ea7-d7b5454eb666"
                    alt="графік балансу" />
                </div>
              </div>
            </div>
          </div>

          <div class="cabinet-wallet__content-medium">
            <div class="cabinet-wallet__lists-box">
              <div class="cabinet-wallet__lists-box-transfer">
                <p class="cabinet-wallet__lists-box-transfer-title">Перевести монети</p>

                <ul class="cabinet-wallet__list-transfer">
                  <li class="cabinet-wallet__transfer-item">
                    <div class="cabinet-wallet__transfer-item-svg">
                      <svg
                        width="24"
                        height="24"
                        class="cabinet-wallet__transfer-item-icon">
                        <use xlink:href="#icon-arrow-right"></use>
                      </svg>

                      <svg
                        width="24"
                        height="24"
                        class="cabinet-wallet__transfer-item-icon">
                        <use xlink:href="#icon-credit-card"></use>
                      </svg>
                    </div>

                    <p class="cabinet-wallet__transfer-item-title">Вивести на карту</p>
                  </li>

                  <li class="cabinet-wallet__transfer-item">
                    <div class="cabinet-wallet__transfer-item-svg">
                      <svg
                        width="24"
                        height="24"
                        class="cabinet-wallet__transfer-item-icon">
                        <use xlink:href="#icon-arrow-right"></use>
                      </svg>

                      <svg
                        width="24"
                        height="24"
                        class="cabinet-wallet__transfer-item-icon">
                        <use xlink:href="#icon-people"></use>
                      </svg>
                    </div>

                    <p class="cabinet-wallet__transfer-item-title">Перекласти BS другові</p>
                  </li>
                </ul>
              </div>

              <div class="cabinet-wallet__lists-box-topup">
                <p class="cabinet-wallet__lists-box-topup-title">Поповнити баланс</p>

                <ul class="cabinet-wallet__list-topup">
                  <li class="cabinet-wallet__topup-item">
                    <svg
                      width="32"
                      height="32"
                      class="cabinet-wallet__topup-item-icon">
                      <use xlink:href="#icon-monobank"></use>
                    </svg>

                    <p class="cabinet-wallet__topup-item-title">Monobank</p>
                  </li>

                  <li class="cabinet-wallet__topup-item">
                    <svg
                      width="32"
                      height="32"
                      class="cabinet-wallet__topup-item-icon">
                      <use xlink:href="#icon-wallet-apple"></use>
                    </svg>

                    <p class="cabinet-wallet__topup-item-title">Pay</p>
                  </li>

                  <li class="cabinet-wallet__topup-item">
                    <svg
                      width="135"
                      height="24"
                      class="cabinet-wallet__topup-item-icon cabinet-wallet__topup-item-icon_google-pay">
                      <use xlink:href="#icon-google-pay"></use>
                    </svg>
                  </li>

                  <li class="cabinet-wallet__topup-item">
                    <svg
                      width="32"
                      height="32"
                      class="cabinet-wallet__topup-item-icon">
                      <use xlink:href="#icon-webmoney"></use>
                    </svg>

                    <p class="cabinet-wallet__topup-item-title">WebMoney</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="cabinet-wallet__btn">
              <a
                href="#"
                class="cabinet-wallet__btn-link">
                Запроси друзів та зароби до 2000
                <span>BS</span>
              </a>
            </div>
          </div>

          <div class="cabinet-wallet__history">
            <h3 class="cabinet-wallet__history-title">Історія матчів</h3>

            <ul class="cabinet-wallet__history-list js-cabinet-wallet-history-list"></ul>
          </div>
        </div>`;
  container.innerHTML = baseMarkup;

  const historyListContainer = document.querySelector(
    '.js-cabinet-wallet-history-list'
  ) as HTMLElement;

  getDataFromFirestore(HISTORY_TRANSACTIONS_LIST)
    .then(collection => transactionHistoryList(collection, historyListContainer))
    .catch(handleError);
}
