const $checkBox = document.getElementById('checkbox'),
      $header = document.querySelector('header'),
      $menuH1 = document.querySelector('.menu__h1'),
      $first = document.querySelector('.first'),
      $secondh1 = document.querySelector('.second__h1'),
      $card = document.querySelectorAll('.card--light');

      console.log($card)

$checkBox.addEventListener('change', (e) => {
  document.querySelector('body').classList.toggle('light');
  $header.style.background = 'var(--background-light)';
  $menuH1.classList.toggle('menu__h1--light');
  $secondh1.classList.toggle('second__h1--light');
  $first.classList.toggle('first--light');
  $card.classList.toggle('card--light');
});
