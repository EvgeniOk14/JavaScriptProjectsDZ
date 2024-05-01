//1 'Евгения' 26
//2 'Роман' 24
//3 'Оля' 22
//Средний возраст пользователей: 24

let userName1 = prompt("Введите имя первого пользователя: ")
let user1BirthYear = parseInt(prompt("Введите количество лет первого пользователя: "))
let userName2 = prompt("Введите имя второго пользователя: ")
let user2BirthYear = parseInt(prompt("Введите количество лет второго пользователя: "))
let userName3 = prompt("Введите имя третьего пользователя: ")
let user3BirthYear = parseInt(prompt("Введите количество лет третьего пользователя: "))

let middleAgeOfAllUsers = (user1BirthYear + user2BirthYear + user3BirthYear) / 3

let count = 1
console.log(`
     ${count} ${userName1} ${user1BirthYear} 
     ${++count} ${userName2} ${user2BirthYear} 
     ${++count} ${userName3} ${user3BirthYear} 
     Средний возраст пользователей: ${middleAgeOfAllUsers}
    `);