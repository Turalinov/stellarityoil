(function(){
  const btn = document.querySelector('.hero__btn');
  const header = document.querySelector('.header');
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    const element = document.querySelector('#intro');
    const offset = header.clientHeight;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementReact = element.getBoundingClientRect().top;
    const elementPosition = elementReact - bodyRect;
    const offsetPositon = elementPosition - offset;

    window.scrollTo({
      top: offsetPositon,
      behavior: 'smooth',
    })

  })
})();
