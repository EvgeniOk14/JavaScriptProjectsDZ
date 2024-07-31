function returnList()
{
    let listOfArticles = ['Книга', 'Сахар', 'Яблоки', 'Арбуз', 'Макароны', 'Молоко', 'Кофе'];
    return listOfArticles;
}

function sortList(listOfArticles)
{
    for (let i = 0; i < listOfArticles.length; i++)
    {
        for (let j = 0; j < listOfArticles.length - 1; j++)
        {
            if (listOfArticles[j] > listOfArticles[j + 1])
            {
            let swapElement = listOfArticles[j];
            listOfArticles[j] = listOfArticles[j + 1];
            listOfArticles[j + 1] = swapElement;
            }
        }
    }
    return listOfArticles;
}

function showListOfArticles(listOfArticles) 
{
    // создаём тег ul и добавляем его в тег body
    let UlElement = document.createElement('ul');
    UlElement.classList.add('ul-list');
    document.body.append(UlElement);

    for(let i = 0;  i < listOfArticles.length; i++)
    {
    let LiElement = document.createElement('li');
    LiElement.textContent = `${i + 1}) ${listOfArticles[i]}`;
    UlElement.append(LiElement);
    }
}

/** создание кнопки addButtonElement (добавление роста) **/
function addButton()
{
    const addButtonElement = document.createElement("button"); // создали кнопку "Добавить новый товар: "
    addButtonElement.textContent = "Добавить новый товар: " // добавили кнопке addButtonElement текст: "Добавитьновый товар: "
    addButtonElement.classList.add("button", "addButton"); // добавили кнопке addButtonElement класс class="addButton" кнопке 
    document.body.append(addButtonElement); // добавили кнопку addButtonElement в тег <body>   
    return addButtonElement;
}

function clickOnAddButton(foundIndex)
{
    let UlElement = document.querySelector('.ul-list');
    let flag = true;
    while(flag)
    {
        let newArticle = prompt("Введите новый товар: ");
        if(newArticle)
        {
            // let newLiElement = document.createElement('li');
            // newLiElement.textContent = `${foundIndex + 1}) ${newArticle}`;
            // UlElement.append(newLiElement);

            sortLiElement(UlElement, newArticle);

            flag= false;
            break;

        } 
        else
        {
            alert("Вы ни чего не ввели!");
            let answer = prompt("Хотите продолжить? (Да/Нет)");
            if (answer.ignoreCase === "да")
            {
                continue;
                flag = true;
            }
            else
            {
                flag = false;
                break;
            }

        }   
    }
}

function foundIndex()
{
    let UlElement = document.querySelectorAll('.ul-list li');
    let lengthOfList = UlElement.length;
    return lengthOfList;
}

function sortLiElement(UlElement, newArticle)
{
    let listOfArticles = Array.from(UlElement.querySelectorAll('li')).map(item => item.textContent.split(") ")[1]);
    listOfArticles.push(newArticle);

    let sortedList = sortList(listOfArticles);

    // Очищаем текущий список
    UlElement.innerHTML = '';

    for(let i = 0;  i < sortedList.length; i++)
    {
        let LiElement = document.createElement('li');
        LiElement.textContent = `${foundIndex() + 1}) ${sortedList[i]}`;
        UlElement.append(LiElement);
    }
}