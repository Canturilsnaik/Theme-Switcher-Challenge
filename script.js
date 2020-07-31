const $checkBox = document.getElementById('checkbox'),
      $header = document.querySelector('header'),
      $menuH1 = document.querySelector('.menu__h1'),
      $first = document.querySelector('.first'),
      $secondh1 = document.querySelector('.second__h1'),
      $card = document.querySelectorAll('.card'),
      $cardSecond = document.querySelectorAll('.card__second'),
      $box = document.querySelectorAll('.box'),
      $boxSecond = document.querySelectorAll('.box__second'),
      $toggle = document.querySelector('.label'),
      $ball = document.querySelector('.ball');

$checkBox.addEventListener('change', (e) => {
  setLight();
});


function setLight(){
  document.querySelector('body').classList.toggle('light');
  $header.style.background = 'var(--background-light)';
  $menuH1.classList.toggle('menu__h1--light');
  $secondh1.classList.toggle('second__h1--light');
  $first.classList.toggle('first--light');
  $toggle.classList.toggle('label--light');
  $ball.classList.toggle('ball--light')


  $card.forEach(item => {
    item.classList.toggle('card--light');
    item.classList.toggle('card--dark');
  });

  $box.forEach(item => {
    item.classList.toggle('box--light');
    item.classList.toggle('box--dark');
  });

  $cardSecond.forEach(item => {
    item.classList.toggle('card__second--ligth');
  });

  $boxSecond.forEach(item => {
    item.classList.toggle('box__second--ligth');
  });
}