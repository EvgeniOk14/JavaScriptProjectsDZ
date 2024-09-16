import Delivery from "./Delivery.js";

let appEl = document.querySelector('.app');

const deliveryArr = [new Delivery("Иван", "ул.Главная, д.1", 8),
                     new Delivery("Антон", "ул. Менее главная, д.2", 10),
                     new Delivery("Роман", "ул. Вспомогательная, д.8", 15)
                    ];

deliveryArr.forEach(delivery => 
{

    let cardEl = delivery.createCardOfItem();
    appEl.appendChild(cardEl);
});

 // Получаем элементы
 let calculateBtn = document.getElementById('calculate-distance-btn');
 let totalDistanceEl = document.getElementById('total-distance');

 // Добавляем обработчик клика на кнопку
 calculateBtn.addEventListener('click', () => 
 {
    const totalDistance = Delivery.getTotalDistance(deliveryArr); // Вызываем статический метод
    totalDistanceEl.textContent = `Общее расстояние: ${totalDistance} км`; // Обновляем текст на странице
 });




