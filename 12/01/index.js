const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "img/скидки.jpg"
  },
  {
    title: "Скидка 10% на всё!",
    icon: "img/скидка10.jpg"
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "img/подарок.png"
  },
  {
    title: "Бесплатная доставка для вас!",
    icon: "img/доставка.jpg"
  },
  {
    title: "Сегодня день больших скидок!",
    icon: "img/деньскидок.jpg"
  }
];

function showCommercial() {
  const divElement = document.querySelector('.container'); 
  const textEl = document.querySelector('#gift-title');
  const imgEl = document.querySelector('#gift-img');

  function displayGift() {
      const randomGift = giftArr[Math.floor(Math.random() * giftArr.length)];
      textEl.textContent = randomGift.title;
      imgEl.src = randomGift.icon;
      divElement.style.visibility = 'visible'; // Делает элемент видимым

      // Устанавливаем таймер на 3 секунды, чтобы скрыть карточку после нажатия кнопки
      closeCard();
  }

  displayGift(); // Показываем карточку сразу после таймера
}

function closeCard() {
  const closeButton = document.querySelector('#close-button');
  const divElement = document.querySelector('.container');

  closeButton.addEventListener('click', () => {
      divElement.style.visibility = 'hidden'; // Скрываем карточку
      setTimeout(() => {
          showCommercial(); // Показываем новую карточку через 3 секунды
      }, 3000);
  });
}