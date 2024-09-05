function getInput() 
{
    let inputName = document.querySelector('#title');
    let inputGenre = document.querySelector('#genre');
    let inputReleaseYear = document.querySelector('#releaseYear');
    let isWatchedEl = document.querySelector('#isWatched');

    let tbodyEl = document.querySelector('#film-tbody'); // элемент таблица

    let trEl = document.createElement('tr'); // элемент таблицы в котором лежат строки со столбцами таблицы

    let tdEl1 = document.createElement('td'); // солбец 1 с "названием фильма" строки таблицы
    let tdEl2 = document.createElement('td'); // солбец 2 с "жанром фильма" строки таблицы
    let tdEl3 = document.createElement('td'); // солбец 3 с "гдом выпуска фильма" строки таблицы
    let tdEl4 = document.createElement('td'); // солбец 4 с "успели посмотреть" строки таблицы
    let tdAction = document.createElement('td'); // солбец 5 с "кнопками удалить и редактировать" строки таблицы 

    let deleteButton = document.createElement('button'); // кнопка удалить
    let editButton = document.createElement('button'); // кнопка редактировать

    deleteButton.textContent = "Удалить фильм"; // задаём название кнопки удалить
    editButton.textContent = "Редактировать фильм"; // задаём название кнопки редактировать

    // Добавляем кнопки в ячейку действий
    tdAction.appendChild(editButton); // добавляем кнопку редактировать в тег
    tdAction.appendChild(deleteButton); // добавляем кнопку удалить в тег

    // Заполняем ячейки данными
    tdEl1.textContent = inputName.value; // данные о "названии фильма"
    tdEl2.textContent = inputGenre.value; // "данные о жанре фильма"
    tdEl3.textContent = inputReleaseYear.value; // данные о "годе выпуска фильма"
    tdEl4.textContent = isWatchedEl.checked ? 'Да' : 'Нет'; // данные о "просмотре фильма"

    // Добавляем ячейки в строку
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    trEl.appendChild(tdEl4);
    trEl.appendChild(tdAction);

    // Добавляем строку в тело таблицы
    tbodyEl.appendChild(trEl);

    // Получаем текущие фильмы из localStorage или создаем пустой массив
    let films = JSON.parse(localStorage.getItem('films')) || [];

    // Добавляем новый фильм в массив
    let newFilm = 
    {
        title: inputName.value,
        genre: inputGenre.value,
        releaseYear: inputReleaseYear.value,
        isWatched: isWatchedEl.checked
    };
    films.push(newFilm);

    // Сохраняем обновленный массив в localStorage
    localStorage.setItem('films', JSON.stringify(films));

    // Очищаем поля формы для нового ввода
    inputName.value = '';
    inputGenre.value = '';
    inputReleaseYear.value = '';
    isWatchedEl.checked = false;

    // Обработчик удаления строки таблицы
    deleteButton.addEventListener('click', function() 
    {
        trEl.remove(); // Удаляет строку из таблицы
        updateLocalStorage(); // Обновляет localStorage
    });

    // Обработчик редактирования строки таблицы
    editButton.addEventListener('click', function() 
    {
        inputName.value = tdEl1.textContent;
        inputGenre.value = tdEl2.textContent;
        inputReleaseYear.value = tdEl3.textContent;
        isWatchedEl.checked = tdEl4.textContent === 'Да';
        
        // Удаляем фильм из localStorage перед редактированием
        trEl.remove();
        updateLocalStorage();
    });

    // обновляем историю записей
    function updateLocalStorage() 
    {
        let films = [];
        document.querySelectorAll('#film-tbody tr').forEach(row => 
        {
                let cells = row.querySelectorAll('td');
                films.push(
                {
                    title: cells[0].textContent,
                    genre: cells[1].textContent,
                    releaseYear: cells[2].textContent,
                    isWatched: cells[3].textContent === 'Да'
                });
        });
        localStorage.setItem('films', JSON.stringify(films));
    }
}
