// создание элемента: p (Заголовок)
export default function createParagraph()
{
    let titleEl = document.createElement("p");
    titleEl.classList.add("div-class__text");
    titleEl.textContent = "Форма добавления товара: ";
    return titleEl;
}