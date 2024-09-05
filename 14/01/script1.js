// Функция для добавления фильма в таблицу
function addFilmToTable(film) 
{
    const filmTable = document.querySelector('#film-tbody');
    const row = document.createElement('tr');
  
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? 'Да' : 'Нет'}</td>
      <td>
        <button class="edit-btn">Редактировать</button>
        <button class="delete-btn">Удалить</button>
      </td>
    `;
  
    // Добавляем строку в таблицу
    filmTable.appendChild(row);
  
    // Добавляем обработчик для кнопки "Удалить"
    row.querySelector('.delete-btn').addEventListener('click', function () {
      // Удаляем строку из таблицы
      row.remove();
      // Обновляем localStorage
      removeFilmFromStorage(film.title);
    });
  
    // Добавляем обработчик для кнопки "Редактировать"
    row.querySelector('.edit-btn').addEventListener('click', function () {
      editFilm(film, row);
    });
  }
  
  // Функция для редактирования фильма
  function editFilm(film, row) {
    // Загружаем данные фильма в форму для редактирования
    document.querySelector('#title').value = film.title;
    document.querySelector('#genre').value = film.genre;
    document.querySelector('#releaseYear').value = film.releaseYear;
    document.querySelector('#isWatched').checked = film.isWatched;
  
    // Удаляем фильм из localStorage и строки таблицы перед редактированием
    removeFilmFromStorage(film.title);
    row.remove();
  }
  
  // Функция для сохранения фильма в localStorage
  function saveFilmToStorage(film) {
    const films = JSON.parse(localStorage.getItem('films')) || [];
    films.push(film);
    localStorage.setItem('films', JSON.stringify(films));
  }
  
  // Функция для удаления фильма из localStorage
  function removeFilmFromStorage(title) {
    let films = JSON.parse(localStorage.getItem('films')) || [];
    films = films.filter(film => film.title !== title);
    localStorage.setItem('films', JSON.stringify(films));
  }
  
  // Функция для загрузки фильмов из localStorage при загрузке страницы
  function loadFilmsFromStorage() {
    const films = JSON.parse(localStorage.getItem('films')) || [];
    films.forEach(film => addFilmToTable(film));
  }
  
  // Функция для получения данных из формы и добавления/редактирования фильма
  function getInput() {
    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const releaseYear = document.querySelector('#releaseYear').value;
    const isWatched = document.querySelector('#isWatched').checked;
  
    if (title && genre && releaseYear) {
      const film = {
        title,
        genre,
        releaseYear,
        isWatched
      };
  
      // Добавляем фильм в таблицу и сохраняем в localStorage
      addFilmToTable(film);
      saveFilmToStorage(film);
  
      // Очищаем форму после добавления
      document.querySelector('#film-form').reset();
    } else {
      alert('Пожалуйста, заполните все поля!');
    }
  }
  
  // Добавляем обработчик для формы
  document.querySelector('#film-form').addEventListener('submit', function (event) {
    event.preventDefault();
    getInput();
  });
  
  // Загружаем фильмы из localStorage при загрузке страницы
  document.addEventListener('DOMContentLoaded', loadFilmsFromStorage);
  