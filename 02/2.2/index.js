// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.

//let product1 = "Молоко" // Название товара 1
//let price1 = 75 // Стоимость товара  1
//let count1 = 1 // Количесто товара 1
//console.log(product1, price1 * count1) // Вывод в консоль

let product = prompt("Введите название продукта, его цену и количество через запятую (например: Название продукта, Цена, Количество): ");
let [productName, price, count] = product.split(", ").map(item => item.trim());

price = parseFloat(price); // Преобразование цены в число с плавающей точкой
console.log(price)

console.log(count)
count = parseInt(count); // Преобразование количества в целое число

let sumCostOfProduct = price * count

console.log("Продукт : ", product, " общая стоимость всех продуктов  = ", sumCostOfProduct) // Вывод в консоль

alert(product, price, count, sumCostOfProduct)



let product1 = prompt("Ведите название продукта 1: ")
let price1 = prompt("Введите цену продукта 1: ")
let count1 = prompt("Введите количество пролдукта 1: ")

let sumCostOfProduct1 = price1 * count1

console.log("Продукт 1:", product1, "общая стоимость всех продуктов 1 = ", sumCostOfProduct1) // Вывод в консоль

alert(product1, price1, count1, sumCostOfProduct1)


//let product2 = "Кофе" // Название товара 2
//let price2 = 420  // Стоимость товара  2
//let count2 = 1 // Количесто товара 2
//console.log(product2, price2 * count2) // Вывод в консоль

let product2 = prompt("Ведите название продукта 2: ")
let price2 = prompt("Введите цену продукта 2: ")
let count2 = prompt("Введите количество пролдукта 2: ")

let sumCostOfProduct2 = price2 * count2

console.log("Продукт 2:", product2, "общая стоимость всех продуктов 2 = ", sumCostOfProduct2) // Вывод в консоль

alert(product2, price2, count2, sumCostOfProduct2)



//let product3 = "Яблоки" // Название товара 2
//let price3 = 80 // Стоимость товара  2
//let count3 = 2 // Количесто товара 2
//console.log(product3, price3 * count3) // Вывод в консоль

let product3 = prompt("Ведите название продукта 3: ")
let price3 = prompt("Введите цену продукта 3: ")
let count3 = prompt("Введите количество пролдукта 3: ")

let sumCostOfProduct3 = price3 * count3

console.log("Продукт 3:", product3, "общая стоимость всех продуктов 3 = ", sumCostOfProduct3) // Вывод в консоль

alert(product3, price3, count3, sumCostOfProduct3)