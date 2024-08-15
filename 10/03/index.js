function fillTegLi(array) 
{
    let ulElement = document.createElement('ul');
    ulElement.className = "ulClass";
    
    for(var i = 0; i < array.length; i++)
    {
       let liElement = document.createElement('li');
       liElement.textContent = `${array[i]}`; 
       ulElement.appendChild(liElement);
    }
    document.body.appendChild(ulElement);
}

function sortArrayByOrder() {
    let ulElement = document.querySelector('.ulClass'); // Выбираем <ul> с классом ulClass
    let listItems = Array.from(ulElement.querySelectorAll('li')); // Получаем все элементы <li> внутри <ul> и преобразуем в массив

    // Сортируем элементы <li> по возрастанию
    listItems.sort((a, b) => parseInt(a.textContent) - parseInt(b.textContent));

    ulElement.innerHTML = ''; // Очищаем <ul>

    // Добавляем отсортированные элементы <li> обратно в <ul>
    listItems.forEach(item => ulElement.appendChild(item));
}

function sortArrayByReverseOrder() {
    let ulElement = document.querySelector('.ulClass'); // Выбираем <ul> с классом ulClass
    let listItems = Array.from(ulElement.querySelectorAll('li')); // Получаем все элементы <li> внутри <ul> и преобразуем в массив

    // Сортируем элементы <li> по убыванию
    listItems.sort((a, b) => parseInt(b.textContent) - parseInt(a.textContent));

    ulElement.innerHTML = ''; // Очищаем <ul>

    // Добавляем отсортированные элементы <li> обратно в <ul>
    listItems.forEach(item => ulElement.appendChild(item));
}