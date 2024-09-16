// Импортируем кнопки и выпадающие элементы
import createEditButton from "./CreateButton.js";
import createEditModal from "./ModalWindow.js";

// Класс доставки для работы с карточками доставки и их редактированием
export default class Delivery 
{
    _productName;
    _addressOfDelivery;
    _distanceOfDestination;
    _status; // Добавляем свойство статуса

    constructor(productName, addressOfDelivery, distanceOfDestination, status = "заказ доставляется")
    {
        this._productName = productName;
        this._addressOfDelivery = addressOfDelivery;
        this._distanceOfDestination = distanceOfDestination;
        this._status = status;
    }

    // Геттер для статуса
    get status() 
    {
        return this._status;
    }

    // Сеттер для статуса
    set status(newStatus) 
    {
        this._status = newStatus;
        this.updateCardStatus(); // Обновляем внешний вид карточки в зависимости от статуса
    }


     // метод создания карточки с товаром:
     createCardOfItem()
     {
         //создаём новый элемент тег <div>, т.е. - контейнер для карточки с названием divCardEl:
         this.divCardEl = document.createElement('div'); //создаём новый элемент тег <div>, т.е. - контейнер для карточки с названием divCardEl
         this.divCardEl.classList.add("card"); // добавали элементу divCardEl класс class="card" , для дальнейшей стилизации
 
         // создание кнопки:    
         this.editButton = createEditButton(); // создали кнопку - "редактировать"
         this.editButton.classList.add('edit-btn'); // добавили кнопке класс class="edit-btn"
         //создание обёртки для кнопки:
         this.buttonDivEl = document.createElement('div'); // создали обёртку div над кнопкой
         this.buttonDivEl.classList.add("div-edit-button"); // добавили обёртке класс class="div-edit-button"
         // добавление кнопки в обёртку:
         this.buttonDivEl.appendChild(this.editButton); // добавили кнопку в обёртку div
         
 
         // добавление в карточку обёртки с кнопкой:
         this.divCardEl.appendChild(this.buttonDivEl); // добавили в карточку divCardEl обёртку с кнопкой 
 
 
         // Создаем элемент для названия товара:
         this.nameElement = document.createElement('p'); // создали параграф для имени
         this.nameElement.textContent = `Имя:`; // записали в параграф текст - "Имя:"
         // создание обёртки для параграфа с названием товара:
         this.nameDivEl = document.createElement('div'); // создали обёртку div для параграфа
         this.nameDivEl.classList.add('div-edit-name'); // добавили обёртке класс class="div-edit-name"
         this.nameDivEl.appendChild(this.nameElement); // добавили в обёртку div параграф <p> для имени
 
 
         // создание контейнера div для праграфа "Имя" и кнопки Button:
         this.buttonAndNameDiv = document.createElement('div'); // создание онтейнера div для параграфа "Имя" и кнопки Button
         this.buttonAndNameDiv.classList.add('div-buttonAndNameDiv'); // добавление в контейнер класса class="div-buttonAndNameDiv"
         // добавляем в контейнер имя и кнопку:
         this.buttonAndNameDiv.appendChild(this.nameDivEl); // добавляем в контейнер обёртку div с параграфом "Имя"
         this.buttonAndNameDiv.appendChild(this.buttonDivEl); // добавляем в контейнер обёртку div с кнопкой button
 
 
         // создание остальных элементов:
 
         // создаём тег span для обёртки значения productName
         this.nameElementValue = document.createElement('span'); // создаём тег span для значения имени
         this.nameElementValue.textContent = `${this._productName}`; // назначение значения имени через геттер
 
 
         // создаём элемент для адреса клиента:
         this.addressEl = document.createElement('p'); // создание параграфа для адреса
         this.addressEl.textContent = `Адрес:`; // назначение содержимого параграфа для адреса
 
         // создаём тег span для обёртки значения addressOfDelivery
         this.addressOfDeliveryValue = document.createElement('span'); // создание параграфа для значения адреса
         this.addressOfDeliveryValue.textContent = `${this._addressOfDelivery}`; // назначение значения адреса через геттер
 
 
         // создаём элемент расстояние до клиента:
         this.distanceEl = document.createElement('p'); // создание параграфа для расстояния
         this.distanceEl.textContent = `Расстояние:`; // назначение содержимого для параграфа расстояния
 
         // создаём тег span для обёртки значения addressOfDelivery
         this.distanceOfDestinationValue = document.createElement('span'); // создание тега span для значения расстояния
         this.distanceOfDestinationValue.textContent = `${this._distanceOfDestination} км`; // назначения значения расстояния через геттер
 
         this.statusElement = document.createElement('p'); // создание параграфа для статуса
         this.statusElement.classList.add('status-info'); // добавление класса status-info статусу
         this.updateCardStatus(); // Инициализация статуса карточки

         // добавляем в карточку все созданные выше элементы
         this.divCardEl.append(this.buttonAndNameDiv, this.nameElementValue,  this.addressEl, this.addressOfDeliveryValue, this.distanceEl, this.distanceOfDestinationValue, this.statusElement);
 

    
        // Добавляем обработчик события для кнопки редактирования:
        this.editButton.addEventListener('click', () => 
        {
             createEditModal(this); // Показываем модальное окно
         });

         return this.divCardEl; // возвращаем готовый элемент - карточка
     }

     
    // Функция для обновления внешнего вида карточки на основе статуса
     updateCardStatus() 
    {
        this.divCardEl.classList.remove('delivered', 'canceled', 'in-progress'); // удаление предыдущих статусов

        switch (this._status) 
        {
            case "Заказ доставлен":
                this.divCardEl.classList.add('delivered');
                // &#10004 или &#x2714 символы для вставки галочки в html Код. (U+2714) <--- юникод галочки
                this.statusElement.innerHTML = `<span style="color: green;">Заказ доставлен. <span class="green-checkmark">✔</span></span>`;
                this.divCardEl.style.opacity = "0.6"; // Устанавливает прозрачность элемента divCardEl на 60%. Значение 0.6 означает, что элемент будет полупрозрачным, и за ним будет виден контент фона
                this.divCardEl.style.pointerEvents = "none"; // Отключаем взаимодействие с мышкой (делает элемент неактивным после выполнения определённого действия, завершения доставки)
                break;
            case "Заказ отменён":
                this.divCardEl.classList.add('canceled');
                this.statusElement.innerHTML = `<span style="color: red;">Заказ отменён! <span class="black-checkmark">✔</span></span>`;
                this.divCardEl.style.opacity = "1";
                break;
            case "Заказ доставляется":
                this.divCardEl.classList.add('in-progress');
                this.statusElement.innerHTML = `<span style="color: blue;">Заказ доставляется...<span class="running-animation">🏃</span></span>`;
                
                console.log(this.statusElement.innerHTML);
                console.log(getComputedStyle(this.statusElement.querySelector('.running-animation')).animation);
                console.log(this.statusElement.querySelector('.running-animation'));

                this.divCardEl.style.opacity = "1";
                break;
        }
    }

    // Статический метод для расчета общего расстояния
    static getTotalDistance(deliveries) 
    {
        return deliveries.reduce((total, delivery) => 
            {
            if (delivery._status !== "Заказ отменён") 
            {
                return total + Number(delivery._distanceOfDestination);

            }
            return total;
        }, 0);
    }

}
