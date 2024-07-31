  function returnList()
  {
    let growthList = ['178', '165', '181', '145', '175', '185', '148', '157'];
    return growthList;
  }

  function showListOfAge(growthList)
  {
    let UlElement = document.createElement('ul');
    UlElement.classList.add('ul-list');
    document.body.append(UlElement);

    for (let i = 0; i < growthList.length; i++)
    {
        let liElement = document.createElement('li')
        liElement.textContent = `${i +1}) ${growthList[i]}`;
        UlElement.append(liElement);
    }
  }

  /** создание кнопки findPupilWithGrowthElement (поиск ученика по росту) **/
  function findButton()
  {
      const findPupilWithGrowthElement = document.createElement("button"); // создали кнопку "найти ученика по его росту: "
      findPupilWithGrowthElement.textContent = "найти ученика по его росту: " // добавили кнопке findPupilWithGrowthElement текст: "найти ученика по его росту: "
      findPupilWithGrowthElement.classList.add("button", "findButton"); // добавили кнопке findPupilWithGrowthElement класс class="findButton" кнопке 
      document.body.append(findPupilWithGrowthElement); // добавили кнопку findPupilWithGrowthElement в тег <body>   
      return findPupilWithGrowthElement;
  }
    
  /** создание кнопки addButtonElement (добавление роста) **/
    function createButton()
    {
        const addButtonElement = document.createElement("button"); // создали кнопку "Добавить рост: "
        addButtonElement.textContent = "Добавить рост: " // добавили кнопке addButtonElement текст: "Добавить рост: "
        addButtonElement.classList.add("button", "addButton"); // добавили кнопке addButtonElement класс class="addButton" кнопке 
        document.body.append(addButtonElement); // добавили кнопку addButtonElement в тег <body>   
        return addButtonElement;
    }

    /** создание кнопки filterButtonElement (филтрации) **/
    function filterButton() 
    {
        const filterButtonElement = document.createElement("button"); // создали кнопку "фильтровать: "
        filterButtonElement.textContent = "отфильтровать: " // добавили кнопке filterButtonElement текст: "отфильтровать: "
        filterButtonElement.classList.add("button", "filterButton"); // добавили кнопке filterButtonElement класс class="filterButton" кнопке 
        document.body.append(filterButtonElement); // добавили кнопку filterButtonElement в тег <body>     
        return filterButtonElement;
    }

    function clickOnAddButton() 
    {
        let growthList = document.querySelectorAll('.ul-list li'); 

        growthList.forEach(element => 
        {
            element.style.color = "";
        });

        let continueSearching = true;
    
        while (continueSearching) 
        {
            let newPupilGrowth = prompt("Введите рост нового ученика: ");
    
            if (!newPupilGrowth) 
            {
                alert("Вы не ввели никаких данных!");
                continue;
            }
    
            let growthFound = false;

            for (let i = 0; i < growthList.length; i++) 
            {
                if (growthList[i].textContent.includes(newPupilGrowth)) 
                {
                    document.querySelector(`li:nth-child(${i + 1})`).style.color = "red";
                    growthFound = true;
                    break;
                }
            }
    
            if (!growthFound) 
            {
                alert("Такого роста в списке нет!");
                let answer = prompt("Хотите продолжить поиск? (да/нет)");
    
                if (answer.toLowerCase() === "да") 
                {
                    continueSearching = true;
                }
                else if (answer.toLowerCase() === "нет") 
                {
                    alert("Неправильный ввод! Поиск прекращен.");
                    continueSearching = false;
                }
            }
            else 
            {
                continueSearching = false;
            }
        }
    }
    
    function clickOnAddFindButton()
    {
       let flag = true;
       while(flag)
       {
            const newPupilGrowth = prompt("Введите свой рост в см: от 30см до 250см: ");

            if (!newPupilGrowth) 
            {
                alert("Вы не ввели ни каких данных!");
                continue;
            }

            if (newPupilGrowth)
            {
                if (!isNaN(parseInt(newPupilGrowth)))
                {
                    const growthValue = parseInt(newPupilGrowth);
                    if(growthValue <= 250 & growthValue > 30)
                    {
                        let ulElement = document.querySelector('.ul-list');
                        const sizeOfList = findIndex();
                        const liElement = document.createElement('li');
                        liElement.textContent = `${sizeOfList + 1}) ${newPupilGrowth}`;
                        ulElement.append(liElement);
                        flag = false;
                    }
                    else if (growthValue < 30)
                    {
                       let answer = prompt("Вы карлик? (да/нет)");
                       if (answer === "да")
                       {
                        alert("Это сайт не для карликов!")
                        flag = false;
                        break;
                       }
                       if (answer === "нет")
                       {
                         alert('зачем тогда пишешь ерунду?');
                         flag = true;
                         continue;
                       }
                    }
                    else if (growthValue > 250)
                        {
                           let answer = prompt("Вы великан? (да/нет)");
                           if (answer === "да")
                           {
                            alert("Великаны погибли 300 лет назад в глобальном потопе!")
                            flag = false;
                            break;
                           }
                           if (answer === "нет")
                            {
                              alert('зачем тогда пишешь ерунду?');
                              flag = true;
                              continue;
                            }
                        }
                    }
                    else
                    {
                        alert('Вы ввели рост, не свойственный этой реальности!');
                        flag = true;
                        continue;
                    }
                }
                else
                {
                    alert('Вы вели не число!');
                    flag = true;
                    continue;
                }
            }  
            
        } 

    function clickOnFilterButton() 
    {
        let flag = true;
        while(flag)
        {
            let sortGrowth = prompt("Введите критерий отбора роста в см:");
    
            if (sortGrowth) 
            {
                if (!isNaN(parseInt(sortGrowth))) 
                {
                    let growthValue = parseInt(sortGrowth);
                    if (growthValue > 20 && growthValue < 250) 
                    {
                        const ulElement = document.querySelector('.ul-list');
                        const liElements = ulElement.querySelectorAll('li');
                        const newListOfGrowth = document.createElement('ul');
                        newListOfGrowth.classList.add('ul-list');
    
                        for (let i = 0; i < liElements.length; i++) 
                        {
                            // Извлекаем числовое значение роста из текста элемента <li>: разбивает содержимое элемента на массив двух значений по разделителю ") "
                            let currentGrowth = parseInt(liElements[i].textContent.split(') ')[1]);
                        
                            // Сравниваем это значение с введенным пользователем значением
                            if (currentGrowth > growthValue)     
                            {
                                const newLi = document.createElement('li');
                                newLi.textContent = liElements[i].textContent;
                                newListOfGrowth.appendChild(newLi);
                            }
                        }
    
                        // Заменяем старый список новым списком. Метод replaceChild удаляет ulElement из DOM и вставляет newListOfGrowth на его место.
                        ulElement.parentNode.replaceChild(newListOfGrowth, ulElement);
                        flag = false;
                        break;
                    }
                    else 
                    {
                        alert('Введите рост в диапазоне от 20 до 250 см.');
                        flag = true;
                        continue;
                    }
                }
                else 
                {
                    alert('Введите числовое значение.');
                    flag = true;
                    continue;
                }
            }
            else 
            {
                alert('Вы не ввели никаких данных!');
                let answer = prompt("Хтите выйти? (Да/Нет)").toLowerCase()
                if (answer === "да")
                {
                    flag = false;
                    break;
                }
                else
                {
                    flag = true;
                    continue;
                    
                }
            }
        }
    }
    

    /** метод возвращает индкс массива (списка книг из тега ul) **/
function findIndex()
{
  let UlElement = document.querySelectorAll('.ul-list li'); // получаем список всех данных о росте учеников <ul>
  let index = UlElement.length; // получаем длину списка
  return index; // возвращаем  длину списка
}