// Функция для создания модального окна:
export default function createEditModal(deliveryInstance) 
{
    // Создаем модальное окно:
    let modal = document.createElement('div');
    modal.classList.add('modal');

    // Создаем контейнер для содержимого модального окна:
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Создаем заголовок модального окна:
    let modalHeader = document.createElement('h3');
    modalHeader.textContent = 'Редактировать информацию';

    // Поле ввода для имени:
    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Имя';
    nameInput.value = deliveryInstance.productName; // Заполняем текущее значение

    // Поле ввода для адреса:
    let addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Адрес';
    addressInput.value = deliveryInstance.addressOfDelivery; // Заполняем текущее значение

    // Поле ввода для расстояния:
    let distanceInput = document.createElement('input');
    distanceInput.type = 'number';
    distanceInput.placeholder = 'Расстояние (км)';
    distanceInput.value = deliveryInstance.distanceOfDestination; // Заполняем текущее значение


    // Добавляем выпадающий список для выбора статуса заказа:
    let statusSelect = document.createElement('select'); // создаём элемент выпадающий список
    let statuses = ['Заказ отменён', 'Заказ доставлен', 'Заказ доставляется'];

    // Добавляем опции ['Заказ отменён', 'Заказ доставлен', 'Заказ доставляется'] в выпадающий список:
    statuses.forEach(status => 
    {
        let option = document.createElement('option'); // тег со значением и контентов выпадающего списка 
        option.value = status; // передоваемое значение при выборе из выпадающего списка
        option.textContent = status; // содержимое выпадающего списка, которое видит пользователь
        statusSelect.appendChild(option);
    });

    // Кнопка "Сохранить" изменения:
    let saveButton = document.createElement('button');
    saveButton.textContent = 'Сохранить';
    saveButton.classList.add('save-btn');

    // Кнопка для закрытия модального окна:
    let closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.classList.add('close-btn');

    // Добавляем обработчик события для сохранения данных:
    saveButton.addEventListener('click', () => 
    {
        // Обновляем данные в объекте (значения введённые пользователем):
        deliveryInstance.productName = nameInput.value;
        deliveryInstance.addressOfDelivery = addressInput.value;
        deliveryInstance.distanceOfDestination = distanceInput.value;

        // Обновляем содержимое карточки с новыми значениями из объекта: 
        deliveryInstance.nameElementValue.textContent = deliveryInstance.productName;
        deliveryInstance.addressOfDeliveryValue.textContent = deliveryInstance.addressOfDelivery;
        deliveryInstance.distanceOfDestinationValue.textContent = `${deliveryInstance.distanceOfDestination} км`;

        // Закрываем модальное окно:
        document.body.removeChild(modal); // удаляем модальное окно
        document.body.style.overflow = ''; // Разрешаем прокрутку после закрытия модального окна
    });

    // Обработчик для закрытия модального окна:
    closeButton.addEventListener('click', () => 
    {
        document.body.removeChild(modal);   // удаляем модальное окно
        document.body.style.overflow = ''; // Разрешаем прокрутку после закрытия модального окна
    });

    // Добавляем элементы в модальное :
    modalContent.appendChild(modalHeader);       // добавляем заголовок 
    modalContent.appendChild(nameInput);        //  добавляем ввод названия товара
    modalContent.appendChild(addressInput);    //   добавляем ввод адреса
    modalContent.appendChild(distanceInput);  //    добавляем ввод растояния 
    modalContent.appendChild(statusSelect);  //     добавляем выпадающий список
    modalContent.appendChild(saveButton);   //      добавляем кнопку сохранения
    modalContent.appendChild(closeButton); //       добавляем кнопку закрытия модального окна
    modal.appendChild(modalContent);      //        добавляем содержимое в модальное окно

    // Добавляем модальное окно на страницу:
    document.body.appendChild(modal);         // добавляем модальное окно в DOM 
    document.body.style.overflow = 'hidden'; //  Отключаем прокрутку страницы, пока открыто модальное окно
}