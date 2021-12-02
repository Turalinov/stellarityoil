(function() {

  const menuToggle = document.querySelector('.menu__toggle');

  if (menuToggle) {
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body')

    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      menu.classList.toggle('menu--opened')
      body.classList.toggle('body--locked')
    })




  const menuLinks = document.querySelectorAll('.menu__link');
  const header = document.querySelector('.header');
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (e) => {
      e.preventDefault();

      const blockId = menuLink.getAttribute('href');
      const element = document.querySelector(blockId);
      const offset = header.clientHeight;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementReact = element.getBoundingClientRect().top;
      const elementPosition = elementReact - bodyRect;
      const offsetPositon = elementPosition - offset;

      window.scrollTo({
        top: offsetPositon,
        behavior: 'smooth',
      })

      if (menu.classList.contains('menu--opened')) {
            menu.classList.remove('menu--opened')
            body.classList.remove('body--locked')
      }
    })
  })






  }




})();
