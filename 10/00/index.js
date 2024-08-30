let h1El = document.createElement('h1');
h1El.textContent = "Сайт фотографий";
document.body.append(h1El);

let divEl = document.createElement('div'); // создание общего контайнера container
divEl.classList.add('container');
document.body.append(divEl);

let divEl1 = document.createElement('div'); // создание контайнера container1 с фото и кнопкой
divEl1.classList.add('container1');

let divEl11 = document.createElement('div'); // создание контейнера containerImg фотографии
divEl11.classList.add('containerImg');
divEl1.appendChild(divEl11);


let img1 = document.createElement('img'); // фото1
img1.setAttribute('src','img/фото/обезьяна.jpg');
img1.classList.add('monkey');
divEl11.appendChild(img1); // в container1 добавляем фото1

let img2 = document.createElement('img');  // фото2
img2.setAttribute('src','img/фото/попугай.jpg');
img2.classList.add('parrot');
divEl11.appendChild(img2); // в container1 добавляем фото2

let img3 = document.createElement('img'); // фото3
img3.setAttribute('src','img/фото/цветок.jpg');
img3.classList.add('flower');
divEl11.appendChild(img3); // в container1 добавляем фото3


let divEl12 = document.createElement('div'); // создание контайнера containerButton кнопка
divEl12.classList.add('containerButton');
divEl1.appendChild(divEl12); // в container1 добавляем кнопку

let buttonEl = document.createElement("button"); // создание кнопки
buttonEl.classList.add('buttonClick');
buttonEl.textContent = "button click";
divEl12.append(buttonEl);

divEl.appendChild(divEl1); // добавляем в общий контейнер container контейнер container1 с фотографиями и кнопкой



let divEl2 = document.createElement('div');
divEl2.classList.add('container2');
    
divEl.append(divEl2);
let img4 = document.createElement('img');

divEl2.append(img4);

buttonEl.addEventListener('click', function (event) 
{
    if (img4.classList.contains('fullscreen')) {
        img4.classList.remove('fullscreen');
        img4.removeAttribute('src');
    } else {
        img4.setAttribute('src', 'img/фото/обезьяна.jpg');
        img4.classList.add('fullscreen');
    }
    
});

