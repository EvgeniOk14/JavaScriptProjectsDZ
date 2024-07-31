/** метод возвращает список доступных пользователю книг **/
function returnList()
{
    const listOfBooks = ["Библия", "Коран", "Тора", "Веды", "Алмазные Скрижали", "Махабхарата"]; // создали список книг
    return listOfBooks; // возвращаем список книг
}

/** метод выводит в браузер список всех книг в теге: <ul> <li></li>...<li></li> <ul> **/
function addContentToView(listOfBooks)
{
    let UlElement = document.createElement('ul'); // создаём элемент списка ul
    UlElement.classList.add('ul-listOfBooks'); // Добавляем класс class="ul-listOfBooks" для ul
    document.body.append(UlElement); // добавляем элемент в тек <body>

    for (let i =0; i < listOfBooks.length; i++) // итерируемся в цикле по списку книг
    {
       let liElement = document.createElement('li'); // создаём тег <li>
       liElement.textContent = `${i+1}) ${listOfBooks[i]}`; // запорлняем в цикле все элементы тега <li> книгами
       UlElement.append(liElement); // добавляем елемент тег <li> в тег <ul>
    }
}

/** метод ищет книгу по заданному пользователем имени и подсвечивает её в случае нахождения **/
function searchBook(bookName)
{
  let listOfBooks = document.querySelectorAll('.ul-listOfBooks li'); // получаем список книг из тега ul С классом ul-listOfBooks в котором теги li это книги
  
  listOfBooks.forEach(book => {book.style.color = '';}); // сбрасываем подсветку у книг, что бы при каждом новом нажатии поиска подсвечивалась только найденная книга

  let foundBook = false;  // устанавливаем флаг foundBook равный false

  for(let i = 0; i < listOfBooks.length; i++) // итерируемся по списку книг
  {
    if(listOfBooks[i].textContent.includes(bookName)) // если в содержимое в теге li содержит название введённой книги, то:
      {
        document.querySelector(`li:nth-child(${i+1}`).style.color= "red"; // ищем n-й элемент списка li и подсвечиваем эту книгу красным цветом
        foundBook = true; // устанавливаем флаг поиска равный true (книга найдена)
      }
  }
  if(!foundBook) // если книга не найдена, то:
  {
    alert("Такой книги не найдено!") // пишем об этом пользователю
    const newBookName = prompt("Введите название книги: "); // просим его ввести ещё раз название книги
    if (newBookName) // если название введено
    {
      searchBook(newBookName); // вызываем ещё раз метод поиска книги
    }
  } 
}

function addBookToList()
{
  let UlElement = document.querySelector('.ul-listOfBooks');
  const bookName = prompt("Введите название книги, которую хотите добавить в скписок книг: ");
  const sizeOfList = findIndex(); // получаем длину списка книг (фактически количество книг)
  const liElement = document.createElement('li'); // создаём тег <li>
  liElement.textContent = `${sizeOfList + 1}) ${bookName}`; // добавляем содержимое в тег <li>
  UlElement.append(liElement); // добавляем новый созданный тег <li> в тег <ul>

}

/** метод возвращает индкс массива (списка книг из тега ul) **/
function findIndex()
{
  let UlElement = document.querySelectorAll('.ul-listOfBooks li'); // получаем список всех книг из списка <ul>
  let index = UlElement.length; // получаем длину списка
  return index; // возвращаем  длину списка
}