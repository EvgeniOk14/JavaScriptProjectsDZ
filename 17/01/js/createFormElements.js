//Создание 9 элементов формы:

// 1 создание элемента: lable, оборачивающего элемент inputName (название товара)
function createFormElLabelInputName()
{
    let lableInputNameEl = document.createElement("label");
    lableInputNameEl.classList.add("form-lable__inputName");
    lableInputNameEl.textContent = "Название товара: "
    return lableInputNameEl;
}

// 2 создание элемента: input для имени товара
function createFormElInputName()
{
    
    let inputNameEl = document.createElement("input");
    inputNameEl.classList.add("form-input__name");
    inputNameEl.setAttribute("placeholder", "Введите название товара");
    return inputNameEl;
}

// 3 создание элемента: lable, оборачивающего элемент inputDesk (полка на которой находится товар)
function createFormElLabelInputDesk()
{
    let lableInputDeskEl = document.createElement("label");
    lableInputDeskEl.classList.add("form-lable__inputDesk");
    lableInputDeskEl.textContent = "Полка где находится товар: "
    return lableInputDeskEl;
}

// 4 создание элемента: input для ввода номера полки, где находится товар
function createFormElInputDesk()
{
    let inputDeskEl = document.createElement("input");
    inputDeskEl.classList.add("form-input__desk");
    inputDeskEl.setAttribute("placeholder", "Введите номер полки, где находится товар");
    return inputDeskEl;
}

// 5 создание элемента: lable, оборачивающего элемент inputWeight (вес товара)
function createFormElLabelInputWeight()
{
    let lableInputWeightEl = document.createElement("label");
    lableInputWeightEl.classList.add("form-lable__inputWeight");
    lableInputWeightEl.textContent = "Вес товара: "
    return lableInputWeightEl;
}

// 6 создание элемента: input для ввода веса товара
function createFormElInputWeight()
{
    let inputWeightEl = document.createElement("input");
    inputWeightEl.classList.add("form-input__weight");
    inputWeightEl.setAttribute("placeholder", "Введите вес товара");
    return inputWeightEl;
}

// 7 создание элемента: lable, оборачивающего элемент inputTime (время хранения товара)
function createFormElLabelInputTime()
{
     let lableInputTimeEl = document.createElement("label");
     lableInputTimeEl.classList.add("form-lable__inputTime");
     lableInputTimeEl.textContent = "Время хранения товара: "
     return lableInputTimeEl; 
}

// 8 создание элемента: input для ввода веса товара
function createFormElInputTime()
{
    let inputTimeEl = document.createElement("input");
    inputTimeEl.classList.add("form-input__time");
    inputTimeEl.setAttribute("placeholder", "Введите  время хранения товара");
    return inputTimeEl;
}

// 9 создание элемента: иконка календаря
function createFormElInputCalenDer()
{
    let calendarIcon = document.createElement("i");
    calendarIcon.classList.add("fa", "fa-calendar");
    calendarIcon.id = "calendar-icon";
    return calendarIcon;
}
    

    
export {
    createFormElLabelInputName,
    createFormElInputName,
    createFormElLabelInputDesk,
    createFormElInputDesk,
    createFormElLabelInputWeight,
    createFormElInputWeight,
    createFormElLabelInputTime,
    createFormElInputTime,
    createFormElInputCalenDer
}
    
    

    
    
    


   
    
    