function createMainContainerDiv() 
{
    // создание основного контейнера элемента  divContainerElement:
    let divContainerElement = document.createElement("div");
    divContainerElement.classList.add("div-container");
    return divContainerElement;    
}

// 1 создание контейнера для заголовка divTitleEl:
function createDivTitleEl()
{
    let divTitleEl = document.createElement("div");
    divTitleEl.classList.add("div-container__text"); 
    return divTitleEl;
}

// 2 создание элемента div для элементов формы divInputElements:
function createDivForm()
{
    let divInputElements = document.createElement("div");
    divInputElements.classList.add("div-container__input");
    return divInputElements;
}

// 3 создание элемента div для Кнопки divButtonElement:
function createDivButton()
{
    let divButtonElement = document.createElement("div");
    divButtonElement.classList.add("div-container__button");
    return divButtonElement;
}

//создание 4х контейнеров div для элементов ввода:

// 1 создание элемента div name:
function createDivForInputName() 
{
    let divNameEl = document.createElement("div");
    divNameEl.classList.add("div-container__name");
    return divNameEl;

}

// 2 создание элемента div desk:
function createDivForInputDesk() 
{
    let divDeskEl = document.createElement("div");
    divDeskEl.classList.add("div-container__desk");
    return divDeskEl;
}

// 3 создание элемента div weight:
function createDivForInputWeight() 
{
     let divWeightEl = document.createElement("div");
     divWeightEl.classList.add("div-container__weight");
     return divWeightEl;
}

// 4 создание элемента div Time
function createDivForInputTime() 
{
    let divTimeEl = document.createElement("div");
    divTimeEl.classList.add("div-container__time");
    return divTimeEl;
}
    
    

    

    




export {
    createMainContainerDiv,
    createDivTitleEl,
    createDivForm,
    createDivButton,
    createDivForInputName,
    createDivForInputDesk,
    createDivForInputWeight,
    createDivForInputTime
}