
function createNewTeg() 
{
        lIElement = document.createElement('li');
        lIElement.textContent = 'Новый элемент';
        ulElement.appendChild(lIElement);
}
function deleteTeg()
{
     lIElement = document.querySelector('li');
     ulElement.removeChild(lIElement);
    
}