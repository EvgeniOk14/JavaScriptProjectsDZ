export default function viewDataPage() 
{
    // Создание контейнера для страницы
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');

    // Создание заголовка страницы
    const header = document.createElement('header');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.textContent = 'Склад';
    header.appendChild(title);

    // Кнопка "Добавить запись"
    const addButton = document.createElement('button');
    addButton.classList.add('add-button');
    addButton.textContent = 'Добавить запись';

    addButton.addEventListener('click', async() => {
        //window.location.href = './index.html'; // Загружаем новую страницу способ 1

        // Загружаем новую страницу способ 2
        document.body.innerHTML =""
        pageContainer.innerHTML ="";
        document.body.appendChild(pageContainer);
        const loadNewPage = await import('./viewMainForm.js');
        const newContent = loadNewPage.default();
        pageContainer.appendChild(newContent);
    });

    header.appendChild(addButton);

    // Создание таблицы для отображения данных
    const table = document.createElement('table');
    table.classList.add('data-table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Наименование', 'Полка', 'Вес', 'Время хранения', 'Действия'];
    headers.forEach(text => 
        {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const storedData = localStorage.getItem('productData');
    const productData = JSON.parse(storedData) || [];

    if (Array.isArray(productData)) 
    {
        productData.forEach(product => 
        {
            const row = document.createElement('tr');

            Object.values(product).forEach(value => 
            {
                const td = document.createElement('td');
                td.textContent = value;
                row.appendChild(td);
            });

            // Ячейка для кнопок "Редактировать" и "Удалить"
            const actionsTd = document.createElement('td');

            // Кнопка "Редактировать"
            const editButton = document.createElement('button');
            editButton.textContent = 'Редактировать';
            editButton.addEventListener('click', () => 
            {
                const cells = row.querySelectorAll('td');
                if (editButton.textContent === 'Редактировать') 
                {
                    cells.forEach((cell, index) => 
                    {
                        // Пропускаем последнюю ячейку (действия)
                        if (index < cells.length - 1) 
                        { 
                            const input = document.createElement('input');
                            input.type = 'text';
                            input.value = cell.textContent;
                            cell.textContent = '';
                            cell.appendChild(input);
                        }
                    });
                    editButton.textContent = 'Сохранить';
                }
                else
                {
                    const updatedProduct = {};
                    cells.forEach((cell, index) => 
                    {
                        // Пропускаем последнюю ячейку (действия)
                        if (index < cells.length - 1) 
                        { 
                            const input = cell.querySelector('input');
                            if (input) 
                            {
                                updatedProduct[headers[index]] = input.value;
                                cell.textContent = input.value;
                            }
                        }
                    });
                    editButton.textContent = 'Редактировать';

                    // Обновление данных в localStorage
                    const updatedData = Array.from(tbody.querySelectorAll('tr')).map(tr => {
                        const tds = tr.querySelectorAll('td');
                        return {
                            name: tds[0].textContent,
                            desk: tds[1].textContent,
                            weight: tds[2].textContent,
                            time: tds[3].textContent
                        };
                    });
                    localStorage.setItem('productData', JSON.stringify(updatedData));
                }
            });

            // Кнопка "Удалить"
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.addEventListener('click', () => {
                row.remove();
                const updatedData = Array.from(tbody.querySelectorAll('tr')).map(tr => {
                    const tds = tr.querySelectorAll('td');
                    return {
                        name: tds[0].textContent,
                        desk: tds[1].textContent,
                        weight: tds[2].textContent,
                        time: tds[3].textContent
                    };
                });
                localStorage.setItem('productData', JSON.stringify(updatedData));
            });

            actionsTd.appendChild(editButton);
            actionsTd.appendChild(deleteButton);
            row.appendChild(actionsTd);

            tbody.appendChild(row);
        });
    } else {
        console.error('productData не является массивом');
    }

    table.appendChild(tbody);

    pageContainer.appendChild(header);
    pageContainer.appendChild(table);

    return pageContainer;
}


