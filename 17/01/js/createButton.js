//создание кнопки buttonEl главного меню
export default function createButtonMainMenu()
{
    let buttonEl = document.createElement("button");
    buttonEl.classList.add("div-container__button-button");
    buttonEl.textContent = "Добавить новый товар";
    return buttonEl;
}