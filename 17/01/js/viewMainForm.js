// функция создания главного меню viewMainForm:
export default async function viewMainForm()
{
    // Динамический импорт модуля создания основного контейнера divContainerElement:
    const moduleCreateMainContainer = await import('./createContainers.js');
     // Доступ к функции из импортированного модуля и присваивание её значения главному тегу divMainContainerElement
     let divMainContainerElement = moduleCreateMainContainer.createMainContainerDiv();
    //добавление главного тега <div> divMainContainerElement, в тег <body></body>:
    document.body.appendChild(divMainContainerElement);
    

    // создание элемента: p (Заголовок)
    const createParagraph = await import('./createParagraph.js');
    let titleEl = createParagraph.default();

    //создание трёх тегов <div> для основного контейнера с содержимым: заголовок, форма и кнопка:

    // 1 создание тега <div> в котором находится Заголовок, для основного контейнера:  
    const moduleCreateTitle = await import('./createContainers.js');
    let divTextContainerElement = moduleCreateTitle.createDivTitleEl();

    //добавление контейнера заголовка divTextContainerElement в основной контейнер divMainContainerElement:
    divMainContainerElement.appendChild(divTextContainerElement);
    //добавляем в контейнер divTitleEl заголовок:
    divTextContainerElement.appendChild(titleEl);


    // 2 создание элемента div для всех полей ввода формы:
    const moduleCreateDivForForm =await import('./createContainers.js');
    let divInputElements = moduleCreateDivForForm.createDivForm();
    //Добавление этого элемента в контейнер divContainerElement
    divMainContainerElement.appendChild(divInputElements);

    // 3 создание элемента div для Кнопки:
    const moduleCreateDivForButton = await import('./createContainers.js');
    let divButtonElement = moduleCreateDivForButton.createDivButton();
    //Добавление этого элемента в контейнер divContainerElement
    divMainContainerElement.appendChild(divButtonElement);

    //создание кнопки buttonEl главного меню
    const createButtonMainMenu = await import('./createButton.js');
    let buttonEl = createButtonMainMenu.default();

    //добавление кнопки в контейнер для кнопки divButtonElement
    divButtonElement.appendChild(buttonEl);
    
    // создание элемента: form (из файла createForm.js единственная дефолтная функция createForm())
    const moduleCreateForm =  await import('./createForm.js');
    let formEl = moduleCreateForm.default();
    //добавление формы formEl в соответствующий контейнер div divInputElement
    divInputElements.appendChild(formEl);


    //создание 4х тегов div для элементов ввода формы:

    // 1 создание тега <div> с названием divNameEl(элемент формы ввода Name - названия товара):
    const createDivFormInputName = await import('./createContainers.js');
    let divNameEl = createDivFormInputName.createDivForInputName();

    // 2 создание тега <div> с названием divDeskEl(элемент формы ввода Desk - полка на которой лежит товар):
    const createDivFormInputDesk = await import('./createContainers.js');
    let divDeskEl = createDivFormInputDesk.createDivForInputDesk();

    // 3 создание тега <div> с названием divWeightEl(элемент формы ввода Weight - вес товара):
    const createDivFormInputWeight = await import('./createContainers.js');
    let divWeightEl = createDivFormInputWeight.createDivForInputWeight();

    // 4 создание тега <div> с названием divTimeEl(элемент формы ввода Time - время хранения товара):
    const createDivFormInputTime = await import('./createContainers.js');
    let divTimeEl = createDivFormInputTime.createDivForInputTime();


    // помещение в основной контейнер всех тегов <div>:
    formEl.appendChild(divNameEl);
    formEl.appendChild(divDeskEl);
    formEl.appendChild(divWeightEl);
    formEl.appendChild(divTimeEl);

    
    //Создание 9 элементов формы:

    // 1 создание элемента: lable, оборачивающего элемент inputName (название товара)
    const createElementLableInputName = await import('./createFormElements.js');
    let lableInputNameEl = createElementLableInputName.createFormElLabelInputName();

    // 2 создание элемента: input для имени товара
    const createElementInputName = await import('./createFormElements.js');
    let inputNameEl = createElementInputName.createFormElInputName();

    // 3 создание элемента: lable, оборачивающего элемент inputDesk (полка на которой находится товар)
    const createElementLableInputDesk = await import('./createFormElements.js');
    let lableInputDeskEl = createElementLableInputDesk.createFormElLabelInputDesk(); 

    // 4 создание элемента: input для ввода номера полки, где находится товар
    const createElementInputDesk = await import('./createFormElements.js');
    let inputDeskEl = createElementInputDesk.createFormElInputDesk();

    // 5 создание элемента: lable, оборачивающего элемент inputWeight (вес товара)
    const createElementLableInputWeight = await import('./createFormElements.js');
    let lableInputWeightEl = createElementLableInputWeight.createFormElLabelInputWeight();

    // 6 создание элемента: input для ввода веса товара
    const createElementInputWeight = await import('./createFormElements.js');
    let inputWeightEl = createElementInputWeight.createFormElInputWeight();
    
    // 7 создание элемента: lable, оборачивающего элемент inputTime (время хранения товара)
    const createElementLableInputTime = await import('./createFormElements.js');
    let lableInputTimeEl = createElementLableInputTime.createFormElLabelInputTime();

    // 8 создание элемента: input для ввода веса товара
    const createElementInputTime = await import('./createFormElements.js');
    let inputTimeEl = createElementInputTime.createFormElInputTime();


    // 9 создание элемента: иконка календаря
    const createElementCalender = await import('./createFormElements.js');
    let calendarIcon = createElementCalender.createFormElInputCalenDer();

    //Добавление элементов формы <input></input> в соответствующий каждому тег <lable></lable>
    lableInputNameEl.appendChild(inputNameEl);
    lableInputDeskEl.appendChild(inputDeskEl);
    lableInputWeightEl.appendChild(inputWeightEl);
    lableInputTimeEl.appendChild(inputTimeEl);
    lableInputTimeEl.appendChild(calendarIcon);

    // Добавление элементов формы label в тег <form></form>, т.е. в форму:
    divNameEl.appendChild(lableInputNameEl);
    divDeskEl.appendChild(lableInputDeskEl);
    divWeightEl.appendChild(lableInputWeightEl);
    divTimeEl.appendChild(lableInputTimeEl);


    buttonEl.addEventListener('click', async function (e) 
    {
        e.preventDefault(); // Предотвращает действие по умолчанию
        // window.location.href = '../index2.html'; // 1 способ: Переход на другую страницу

        // 2й способ перехода на новую страницу:
        // Шаг 1: Создаём пустой массив
        let productData = [];

        // Убираем предыдущие сообщения об ошибках и стили
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        // Шаг 2: Создаём объект, который необходимо добавить
         // Получаем значения из формы
        const name = inputNameEl.value.trim();
        const desk = inputDeskEl.value.trim();
        const weight = inputWeightEl.value.trim();
        const time = inputTimeEl.value.trim();
        
        let hasError = false; // устанавливаем флаг false на наличие ошибок

    // Валидация данных
    if (!name) 
        {
        showError(inputNameEl, 'Пожалуйста, заполните название!');
        hasError = true;
    }
    if (!desk) 
    {
        showError(inputDeskEl, 'Пожалуйста, заполните полку!');
        hasError = true;
    }
    if (!weight || isNaN(weight) || weight <= 0) 
    {
        showError(inputWeightEl, 'Вес должен быть положительным числом!');
        hasError = true;
    }
    if (!time) 
    {
        showError(inputTimeEl, 'Пожалуйста, укажите время хранения!');
        hasError = true;
    }

    if (hasError) 
    {
        return; // Прекращаем выполнение функции, если есть ошибки
    }

    // Создаём объект данных
    const formData = {
        name,
        desk,
        weight,
        time
    };


        // Шаг 3: Проверяем, если есть данные в localStorage
        const existingData = localStorage.getItem('productData');
        if (existingData) 
        {
            try 
            {
                // Попробуем распарсить существующие данные
                productData = JSON.parse(existingData);
                // Убеждаемся, что это массив
                if (!Array.isArray(productData)) 
                {
                    productData = [];
                }
            }
            catch (e) 
            {
                console.error('Ошибка при парсинге данных из localStorage', e);
                productData = [];
            }
        };

        // Шаг 4: Добавляем новый объект в массив
        productData.push(formData);

        // Шаг 5: Сохраняем массив обратно в localStorage
        localStorage.setItem('productData', JSON.stringify(productData));

        // Выводим сообщение об успешном сохранении
        alert('Данные сохранены в localStorage!');

        // Очисщаем текущее содержимое и загружаем новое меню
        divMainContainerElement.innerHTML = ''; // Очистка контейнера

        const moduleLoaderEl = await import('./loader.js');
        let loaderEl = await  moduleLoaderEl.default();
        document.body.appendChild(loaderEl);

         // Задержка для демонстрации загрузчика (если нужно)
        setTimeout(async () => {
        // Удаляем загрузчик после загрузки
        loaderEl.remove();
        

        // Загружаем новую страницу
        const loadNewPage = await import('./viewSecondMenu.js');
        const newContent = loadNewPage.default();
        divMainContainerElement.appendChild(newContent);
    }, 1000); // Примерная задержка 1 секунда
    });
    
    
    function showError(element, message) 
    {
        // Добавляем красный бордер
        element.classList.add('error');
    
        // Создаем элемент сообщения об ошибке
        const errorMessage = document.createElement('div');
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message');
    
        // Вставляем сообщение рядом с полем
        element.parentElement.appendChild(errorMessage);
    }
    
    // Инициализация календаря Flatpickr
    flatpickr(inputTimeEl, 
    {
    enableTime: true, // Позволяет выбирать также время
    dateFormat: "Y-m-d H:i", // Формат даты и времени
    time_24hr: true // Формат 24 часа
    });
}   