let dropButton = document.querySelector('.about-us__info-button');
let dropInfo = document.querySelector('.info-description__drop-info');

dropButton.addEventListener("click", () => {
  if(dropInfo.classList.contains('visually-hidden')) {
    dropInfo.classList.remove('visually-hidden');
    dropButton.textContent = 'Свернуть';
  } else {
    dropInfo.classList.add('visually-hidden');
    dropButton.textContent = 'Подробнее';
  }
});
