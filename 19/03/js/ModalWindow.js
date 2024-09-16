// Функция для создания модального окна
export default function createEditModal(deliveryInstance) 
{
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    let modalHeader = document.createElement('h3');
    modalHeader.textContent = 'Редактировать информацию';

    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Имя';
    nameInput.value = deliveryInstance._productName; // Используем приватное свойство или геттер

    let addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Адрес';
    addressInput.value = deliveryInstance._addressOfDelivery; // Используем приватное свойство или геттер

    let distanceInput = document.createElement('input');
    distanceInput.type = 'number';
    distanceInput.placeholder = 'Расстояние (км)';
    distanceInput.value = deliveryInstance._distanceOfDestination; // Используем приватное свойство или геттер

    let statusSelect = document.createElement('select');
    let statuses = ['Заказ отменён', 'Заказ доставлен', 'Заказ доставляется'];

    statuses.forEach(status => 
    {
        let option = document.createElement('option');
        option.value = status;
        option.textContent = status;
        if (status === deliveryInstance._status) option.selected = true; // Используем приватное свойство или геттер
        statusSelect.appendChild(option);
    });

    let saveButton = document.createElement('button');
    saveButton.textContent = 'Сохранить';
    saveButton.classList.add('save-btn');

    let closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.classList.add('close-btn');



    saveButton.addEventListener('click', () => 
    {
        // Обновляем данные в объекте
        deliveryInstance._productName = nameInput.value;
        deliveryInstance._addressOfDelivery = addressInput.value;
        deliveryInstance._distanceOfDestination = distanceInput.value;
        
        // Используем сеттер для обновления статуса, а не напрямую _status
        deliveryInstance.status = statusSelect.value; // Обновляем статус через сеттер
    
        console.log(`Updated status to: ${deliveryInstance.status}`);
        
        // Обновляем содержимое карточки с новыми значениями
        deliveryInstance.nameElementValue.textContent = deliveryInstance._productName;
        deliveryInstance.addressOfDeliveryValue.textContent = deliveryInstance._addressOfDelivery;
        deliveryInstance.distanceOfDestinationValue.textContent = `${deliveryInstance._distanceOfDestination} км`;
        
        // Закрываем модальное окно
        document.body.removeChild(modal);
        document.body.style.overflow = ''; // Разрешаем прокрутку после закрытия модального окна
    });
    

    closeButton.addEventListener('click', () => 
    {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    });

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(nameInput);
    modalContent.appendChild(addressInput);
    modalContent.appendChild(distanceInput);
    modalContent.appendChild(statusSelect);
    modalContent.appendChild(saveButton);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}
