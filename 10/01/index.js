let h1El = document.createElement('h1');
h1El.textContent = "Сайт фотографий";
document.body.append(h1El);

let divEl = document.createElement('div'); // создание общего контейнера container
divEl.classList.add('container');
document.body.append(divEl);

let divEl1 = document.createElement('div'); // создание контейнера container1 с фото и кнопкой
divEl1.classList.add('container1');

let divEl11 = document.createElement('div'); // создание контейнера containerImg для фотографий
divEl11.classList.add('containerImg');
divEl1.appendChild(divEl11);

// Функция для обработки клика на изображение
function handleImageClick(event) 
{
    let imgSrc = event.target.getAttribute('src');
    img4.setAttribute('src', imgSrc);
    img4.classList.add('fullscreen');
}

// Создание фотографий и добавление обработчика событий
let img1 = document.createElement('img'); // фото1
img1.setAttribute('src','img/фото/обезьяна.jpg');
img1.classList.add('monkey');
img1.addEventListener('click', handleImageClick);
divEl11.appendChild(img1); // В containerImg добавляем фото1

let img2 = document.createElement('img');  // фото2
img2.setAttribute('src','img/фото/попугай.jpg');
img2.classList.add('parrot');
img2.addEventListener('click', handleImageClick);
divEl11.appendChild(img2); // В containerImg добавляем фото2

let img3 = document.createElement('img'); // фото3
img3.setAttribute('src','img/фото/цветок.jpg');
img3.classList.add('flower');
img3.addEventListener('click', handleImageClick);
divEl11.appendChild(img3); // В containerImg добавляем фото3

let divEl12 = document.createElement('div'); // создание контейнера containerButton для кнопки
divEl12.classList.add('containerButton');
divEl1.appendChild(divEl12); // В container1 добавляем кнопку

let buttonEl = document.createElement("button"); // создание кнопки
buttonEl.classList.add('buttonClick');
buttonEl.textContent = "Скрыть изображение";
divEl12.append(buttonEl);

divEl.appendChild(divEl1); // Добавляем в общий контейнер container контейнер container1 с фотографиями и кнопкой

let divEl2 = document.createElement('div');
divEl2.classList.add('container2');
divEl.append(divEl2);

let img4 = document.createElement('img'); // Здесь будет отображаться выбранное изображение
divEl2.append(img4);

// Обработчик клика по кнопке для скрытия изображения
buttonEl.addEventListener('click', function () {
    if (img4.classList.contains('fullscreen')) {
        img4.classList.remove('fullscreen');
        img4.removeAttribute('src');
    }
});
