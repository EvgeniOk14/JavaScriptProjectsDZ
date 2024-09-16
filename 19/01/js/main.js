import Delivery from "./Delivery.js";

let appEl = document.querySelector('.app');

const deliveryArr = [new Delivery("Иван", "ул.Главная, д.1", 8),
                     new Delivery("Антон", "ул. Менее главная, д.2", 10),
                     new Delivery("Роман", "ул. Вспомогательная, д.8", 15)
                    ];

deliveryArr.forEach(delivery => {

    let cardEl = delivery.createCardOfItem();
    appEl.appendChild(cardEl);
});




