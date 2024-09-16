export default class Delivery
{
    _productName;
    _addressOfDelivery;
    _distanceOfDestination;

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


    createCardOfItem()
    {
        //создаём новый элемент тег <div>, т.е. - контейнер для карточки с названием divCardEl:
        this.divCardEl = document.createElement('div');
        this.divCardEl.classList.add("card"); // добавали элементу divCardEl класс class="card" , для дальнейшей стилизации


        // Создаем элемент для названия товара:
        this.nameElement = document.createElement('p');
        this.nameElement.textContent = `Имя:`;

        // создаём тег span для обёртки значения productName
        this.nameElementValue = document.createElement('span');
        this.nameElementValue.textContent = `${this.productName}`; // обращение через геттер


        // создаём элемент для адреса клиента:
        this.addressEl = document.createElement('p');
        this.addressEl.textContent = `Адрес:`;

        // создаём тег span для обёртки значения addressOfDelivery
        this.addressOfDeliveryValue = document.createElement('span');
        this.addressOfDeliveryValue.textContent = `${this.addressOfDelivery}`; // обращение через геттер


        // создаём элемент расстояние до клиента:
        this.distanceEl = document.createElement('p');
        this.distanceEl.textContent = `Расстояние:`;

        // создаём тег span для обёртки значения addressOfDelivery
        this.distanceOfDestinationValue = document.createElement('span');
        this.distanceOfDestinationValue.textContent = `${this.distanceOfDestination} км`; // обращение через геттер


        this.divCardEl.append(this.nameElement, this.nameElementValue,  this.addressEl, this.addressOfDeliveryValue, this.distanceEl, this.distanceOfDestinationValue);

        return this.divCardEl;
    }

} 
