import createEditButton from "./CreateButton.js"
import createEditModal from "./ModalWindow.js";

export default class Delivery
{
    _productName;             // поле название товара
    _addressOfDelivery;      //  поле адресоставки
    _distanceOfDestination; //   поле расстояние до клиента

    // конструктор класса с параметрами:
    constructor (productName, addressOfDelivery, distanceOfDestination)
    {
        this._productName = productName;
        this._addressOfDelivery = addressOfDelivery;
        this._distanceOfDestination = distanceOfDestination;
    }

    // Геттеры
    get productName() {
        return this._productName;
    }

    get addressOfDelivery() {
        return this._addressOfDelivery;
    }

    get distanceOfDestination() {
        return this._distanceOfDestination;
    }

    // Сеттеры
    set productName(newName) {
        this._productName = newName;
    }

    set addressOfDelivery(newAddress) {
        this._addressOfDelivery = newAddress;
    }

    set distanceOfDestination(newDistance) {
        this._distanceOfDestination = newDistance;
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
        this.nameElementValue.textContent = `${this.productName}`; // назначение значения имени через геттер


        // создаём элемент для адреса клиента:
        this.addressEl = document.createElement('p'); // создание параграфа для адреса
        this.addressEl.textContent = `Адрес:`; // назначение содержимого параграфа для адреса

        // создаём тег span для обёртки значения addressOfDelivery
        this.addressOfDeliveryValue = document.createElement('span'); // создание параграфа для значения адреса
        this.addressOfDeliveryValue.textContent = `${this.addressOfDelivery}`; // назначение значения адреса через геттер


        // создаём элемент расстояние до клиента:
        this.distanceEl = document.createElement('p'); // создание параграфа для расстояния
        this.distanceEl.textContent = `Расстояние:`; // назначение содержимого для параграфа расстояния

        // создаём тег span для обёртки значения addressOfDelivery
        this.distanceOfDestinationValue = document.createElement('span'); // создание тега span для значения расстояния
        this.distanceOfDestinationValue.textContent = `${this.distanceOfDestination} км`; // назначения значения расстояния через геттер

        // добавляем в карточку все созданные выше элементы
        this.divCardEl.append(this.buttonAndNameDiv, this.nameElementValue,  this.addressEl, this.addressOfDeliveryValue, this.distanceEl, this.distanceOfDestinationValue);


         // Добавляем обработчик события для кнопки редактирования:
         this.editButton.addEventListener('click', () => {
            createEditModal(this);
        });

        return this.divCardEl; // возвращаем готовый элемент - карточка
    }

} 

