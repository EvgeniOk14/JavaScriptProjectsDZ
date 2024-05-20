let fahrenheit = (C) => {
    return C * 1.8 + 32;
}

let celsius = (F) => {
    return (F - 32) / 1.8; 
    }


console.log("Градусы цельсия: " + fahrenheit(20));
console.log("Фаренгейт: " + celsius(150));