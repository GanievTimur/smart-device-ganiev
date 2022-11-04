const dropMenu = document.querySelectorAll('.footer-menu');

dropMenu.forEach((evt) =>
  evt.addEventListener("click", () => {
    if(evt.classList.contains('footer-menu__open')) {
      evt.classList.remove('footer-menu__open');
      evt.classList.add('footer-menu__closed');
    }
    else {
      dropMenu.forEach((event) => {
      event.classList.remove('footer-menu__open');
      event.classList.add('footer-menu__closed');
    });
      evt.classList.remove('footer-menu__closed');
      evt.classList.add('footer-menu__open');
    }
  })
)
