document.addEventListener("DOMContentLoaded", () => {
    const filmForm = document.getElementById("film-form");
    const filmTableBody = document.getElementById("film-tbody");

    // Валидация и добавление фильма
    filmForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const title = document.getElementById("title").value.trim();
        const genre = document.getElementById("genre").value.trim();
        const releaseYear = document.getElementById("releaseYear").value.trim();
        const isWatched = document.getElementById("isWatched").checked;

        if (!title || !genre || !releaseYear) {
            alert("Все поля должны быть заполнены.");
            return;
        }

        if (isNaN(releaseYear) || releaseYear.length !== 4) {
            alert("Год выпуска должен быть числом из 4 цифр.");
            return;
        }

        const newFilm = {
            title: title,
            genre: genre,
            releaseYear: releaseYear,
            isWatched: isWatched ? 'Да' : 'Нет'
        };

        addFilmToTable(newFilm);
        filmForm.reset(); // Очистка формы после добавления фильма
    });

    // Функция для добавления фильма в таблицу
    function addFilmToTable(film) {
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched}</td>
            <td><button class="delete-btn">Удалить</button></td>
        `;

        filmTableBody.appendChild(newRow);

        // Добавление обработчика удаления для кнопки
        newRow.querySelector(".delete-btn").addEventListener("click", function() {
            filmTableBody.removeChild(newRow);
        });
    }

    // Фильтрация таблицы
    document.getElementById("filter-title").addEventListener("input", filterFilms);
    document.getElementById("filter-genre").addEventListener("input", filterFilms);
    document.getElementById("filter-year").addEventListener("input", filterFilms);
    document.getElementById("filter-watched").addEventListener("change", filterFilms);

    function filterFilms() {
        const titleFilter = document.getElementById("filter-title").value.toLowerCase();
        const genreFilter = document.getElementById("filter-genre").value.toLowerCase();
        const yearFilter = document.getElementById("filter-year").value;
        const watchedFilter = document.getElementById("filter-watched").value;

        const rows = document.querySelectorAll("#film-tbody tr");

        rows.forEach(row => {
            const title = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
            const genre = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
            const year = row.querySelector("td:nth-child(3)").textContent;
            const watched = row.querySelector("td:nth-child(4)").textContent.toLowerCase();

            let shouldShow = true;

            if (titleFilter && !title.includes(titleFilter)) shouldShow = false;
            if (genreFilter && !genre.includes(genreFilter)) shouldShow = false;
            if (yearFilter && year !== yearFilter) shouldShow = false;
            if (watchedFilter !== 'all' && ((watchedFilter === 'watched' && watched !== 'да') || (watchedFilter === 'not-watched' && watched !== 'нет'))) shouldShow = false;

            row.style.display = shouldShow ? "" : "none";
        });
    }

    // Удаление всех фильмов
    document.getElementById("delete-all-btn").addEventListener("click", function() {
        filmTableBody.innerHTML = "";
    });
});
