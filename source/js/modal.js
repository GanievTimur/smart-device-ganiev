const modalOpenButton = document.querySelector('.header-button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-button__close');
const modalNameInput = document.querySelector('.modal-form__username-button');

modalOpenButton.addEventListener("click", () => {
  if(modal.classList.contains('visually-hidden')) {
    modal.classList.remove('visually-hidden');
    modalNameInput.focus();
  }
});

modalCloseButton.addEventListener("click", () => {
  modal.classList.add('visually-hidden');
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

