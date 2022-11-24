import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

// Modal

const modalOpenButton = document.querySelector('.header-button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__button-close');
const modalNameInput = document.querySelector('.modal-form__username-button');

modalOpenButton.addEventListener('click', () => {
  if (modal.classList.contains('modal')) {
    if (modal.classList.contains('visually-hidden')) {
      modal.classList.remove('visually-hidden');
      modalNameInput.focus();
    }
  }
});

modalCloseButton.addEventListener('click', () => {
  if (modal.classList.contains('modal')) {
    modal.classList.add('visually-hidden');
  }
});

function FormMasked() {
  const maskedInputs = document.querySelectorAll('[data-mask]');

  for (let i = 0; i < maskedInputs.length; i++) {
    maskedInputs[i].addEventListener('input', maskInput);
  }

  for (let i = 0; i < maskedInputs.length; i++) {
    maskedInputs[i].addEventListener('focusout', maskOutput);
  }

  function maskInput() {
    let literalPattern = /[0\*]/;
    let numberPattern = /[0-9]/;
    let newValue = '';
    let valueIndex = 0;
    let maskIndex = 0;

    while (maskIndex < this.dataset.mask.length) {
      if (maskIndex >= this.value.length) {
        break;
      }
      if (this.dataset.mask[maskIndex] === '0' && this.value[valueIndex].match(numberPattern) === null) {
        break;
      }
      while (this.dataset.mask[maskIndex].match(literalPattern) === null) {
        if (this.value[valueIndex] === this.dataset.mask[maskIndex]) {
          break;
        }
        newValue += this.dataset.mask[maskIndex++];
      }
      newValue += this.value[valueIndex++];
      maskIndex++;
    }

    this.value = newValue;
  }

  function maskOutput() {
    if ((this.value.length - 7) < 11) {
      this.value = '';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  FormMasked();
});


//Footer drop menu

const dropMenu = document.querySelectorAll('.footer-menu');
const noJsFooterSections = document.querySelector('.footer-sections__list');
const noJsFooterContacts = document.querySelector('.footer-contacts__list');

noJsFooterSections.classList.remove('footer-sections__list--no-js');
noJsFooterContacts.classList.remove('footer-contacts__list--no-js');

dropMenu.forEach((evt) =>
  evt.addEventListener('click', () => {
    if (evt.classList.contains('footer-menu__open')) {
      evt.classList.remove('footer-menu__open');
      evt.classList.add('footer__menu-closed');
    } else {
      dropMenu.forEach((event) => {
        event.classList.remove('footer-menu__open');
        event.classList.add('footer__menu-closed');
      });
      evt.classList.remove('footer__menu-closed');
      evt.classList.add('footer-menu__open');
    }
  })
);

//About us drop menu

let dropButton = document.querySelector('.about-us__info-button');
let dropInfo = document.querySelector('.about-us__info-description-drop-info');

dropButton.addEventListener('click', () => {
  if (dropInfo.classList.contains('visually-hidden')) {
    dropInfo.classList.remove('visually-hidden');
    dropButton.textContent = 'Свернуть';
  } else {
    dropInfo.classList.add('visually-hidden');
    dropButton.textContent = 'Подробнее';
  }
});
