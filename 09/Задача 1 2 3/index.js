// создали базовый абстрактный автомобиль baseCar, на его основе будут строится другие реальные автомобили
const baseCar = 
    {
        brand: "",
        model: "",
        color: "",
        yearOfManufactureOfCar : 0,
        doors: 0,
        isStarted: false,
        hp: 0
      }

//автомобиль Мерседес, имеет те же поля, что и базовый автомобиль      
let mercedes = {...baseCar}
//автомобиль БМВ, имеет те же поля, что и базовый автомобиль  
let bmw = {...baseCar}
//автомобиль АУДИ, имеет те же поля, что и базовый автомобиль  
let audi = {...baseCar}
//автомобиль Лексус, имеет те же поля, что и базовый автомобиль  
let lexus = {...baseCar}
//автомобиль Тойота, имеет те же поля, что и базовый автомобиль  
let toyota = {...baseCar}

// создаём массив полей со значениями для автомобиля Мерседес
let MercedesArray = ["Mercedes", "SL600", "White", 2024, 4, false, 500];
// создаём массив полей со значениями для автомобиля БМВ
let BmwArray = ["BMW", "760", "Black", 2023, 4, false, 450];
// создаём массив полей со значениями для автомобиля АУДИ
let AudiArray = ["AUDI", "SL600", "Grey", 2022, 4, false, 400];
// создаём массив полей со значениями для автомобиля Лексус
let LexusArray = ["Lexus", "LS600h", "White", 2021, 4, false, 350];
// создаём массив полей со значениями для автомобиля Тойота
let ToyotaArray = ["Toyota", "Camry", "White", 2024, 4, false, 250];

// создаём список из объектов с полями для автомобилей
let carsFieldsArray = [MercedesArray, BmwArray, AudiArray, LexusArray, ToyotaArray];

// создаём список автомобилей
let cars = [mercedes, bmw, audi, lexus, toyota]


//решение задачи 1:

// метод принимает на вход два списка и итерируется по ним и присваивает пустым полям значения из списка объектов с заполненными полями для конкретного автомобиля
function fillFields(cars, carsFieldsArray) {
    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        let fieldsArray = carsFieldsArray[i];

        Object.keys(car).forEach((key, index) => {
            car[key] = fieldsArray[index];
        });
    }
    return cars;
}

// метод printCars, принимает на вход массив из автомобилей (с уже заполненными полями) и печатает поля со значениями
function printCars(cars) 
{
    // итерируемся по списку автомобилей
    cars.forEach((car) => 
    {
        console.log(`Автомобиль марки ${car.brand}:`); // печать марки автомобиля
        Object.keys(car).forEach((property) => 
        {
            console.log(`${property}: ${car[property]}`); // печать полей
        });
        console.log(''); // Добавляет пустую строку между автомобилями для лучшей читаемости
    });
}

function getCar(brand)
{
    let flag  = false;
    cars.forEach((car) => 
    {
        if (car.brand.includes(brand))
        {
            // console.log(`Найден автомобиль: `);
            // console.log(car);
            console.log(`Найден автомобиль: ${JSON.stringify(car, null, 2)}`);

            flag = true;
        }
    });    
        if(!flag)
        {
                console.log(`автомобиль ${brand} в базе данных не найден!`);   
        }    
}

// решение задачи 2: 
// метод вывод названий брендов автоиобилей в консоль
function getCarName(cars)
{
    cars.forEach((car) => 
    {
            console.log(`${car.brand}`);
    });
}

//решение задачи 3: 
// метод принимает в качестве параметра объект с совпадающими или любыми другими дополнительными полями;
//объединяет эти два объекта в один и возвращает полученный объект.
function createCar(additionalProps) {
    const defaultCar = {
        wheels: 4,
        doors: 4,
        isStarted: false
    };

    return {
        ...defaultCar,
        ...additionalProps
    };
}




cars = fillFields(cars, carsFieldsArray); // заполнение полей у массива с автомобилями

// решение задачи 1:
printCars(cars); // печать списка автомобилей с выводом их полей
// решение задачи 1 вывод найденного автомобиля и автомобиль не найден
getCar("Lexus");
getCar("Rols roys");

// решение задачи 2: вывод всех брендов автомобилей в консоль
getCarName(cars);

//решение задачи 3: объединяет два объекта в один
console.log(createCar({ name: 'Haval', hp: 198 }));



