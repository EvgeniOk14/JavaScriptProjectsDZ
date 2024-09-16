export default function createEditButton() 
{
    let buttonEl = document.createElement('button');
    buttonEl.classList.add("editButton");
    buttonEl.textContent = "редактировать"
    return buttonEl;
}