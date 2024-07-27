/** метод создаёт массив со случайными числами и возвращает данный массив **/
function createArrayWithRandomNumbers()
{
    let array = []; // создаём пустой массив
    for (let i = 0; i < 10; i++) // итерируемся по циклу 10 раз
    {
        let randomNumber = Math.floor(Math.random() * 100); // Генерируем случайное число от 0 до 99
        array.push(randomNumber); // заполняем массив случайными 10 числами от 0 да 99
    }
    return array; // возвращаем массив 
}
 
/** метод выводит элементы массива в консоль в строку **/
function printArray(array)
{
    let output = '';
    for (let i = 0; i < array.length; i++) 
    {
        output += array[i] + ' ';
    }
    console.log(output.trim());
}

/** метод помещает в тег <p class=".all-elements"> массив случайных чисел от 0 до 99 **/
function showNumbersInParagraph(array) 
{
    const pElement = document.querySelector('.all-elements'); // получили доступ к тегу <p>
    if (pElement) // если элемент найден, то:
        {
        for (let index = 0; index < array.length; index++) // итерируемся по массиву случайных чисел
            {
            const spanElement = document.createElement('span'); // создаём текстовый тег <span>
            spanElement.textContent = array[index] + ' '; // добавляем в тег <span> элементы массива с пробелом для разделения чисел
            pElement.append(spanElement); // добавляем тег <span> в тег <p>
        }
    }
     else // если эдемент класса .all-elements не найден, то:
     {
        console.error('Элемент <p class="all-elements"> не найден'); // выводим об этом сообщение в консоль
    }
}

// метод нахождение максимального числа массива
function findMaxNumber(array)
{
  let sortArrayFromMaxToMin = array.sort((a, b) => b -a); // сортируем массив по возрастанию (от большего к меньшему)
  printArray("отсортированный массив по возрастанию: " + sortArrayFromMaxToMin.join(' '));
  let minNumber = sortArrayFromMaxToMin[0]; // берём первый элемент - он является максимальным в массиве
  console.log("минимальное число равно: " + minNumber);
  return minNumber; // возвращаем максимальный элемент массив
}

// метод нахождение минимального числа массива
function findMinNumber(array)
{
   let sortArrayFromMinToMax = array.sort((a, b) => a -b); // сортируем массив по убыванию (от меньшего к большему)
   printArray("отсортированный массив по убыванию: " + sortArrayFromMinToMax.join(' '));
   let maxNumber = sortArrayFromMinToMax[0];// берём первый элемент - он является минимальным в массиве
   console.log("максимальное число равно: " + maxNumber);
   return maxNumber; // возвращаем максимальный элемент массива
}

/** отображение максимального элемента массива при нажатие кнопки max **/
function showMaxNumber(maxNumber)
{
    let maxElementSpan = document.querySelector('.maxNumber'); // получаем доступ к тегу <span>
    maxElementSpan.textContent = maxNumber; // заполняем в этот тег содержимое maxNumber
}

/** отображение минимального элемента массива при нажатие кнопки min **/
function showMinNumber(minNumber)
{
    let minElementSpan = document.querySelector('.minNumber'); // получаем доступ к тегу <span>
    minElementSpan.textContent = minNumber; // заполняем в этот тег содержимое minNumber
}

