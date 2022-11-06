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
