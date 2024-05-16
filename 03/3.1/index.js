let availableAmount = 500 // сумма на счёте 
let isCardInATM = false  //  карта не в банкомате
let inputNumber = prompt("Введите необходимую для танасакции сумму: ") // ввод суммы для выполнения операции с ней
inputNumber = parseInt(inputNumber) // преобразование введённой суммы к числу
if(!isCardInATM && availableAmount >= 0 && availableAmount >= inputNumber && inputNumber >=0)  // проверка услоавий
    {
        alert("Операция выполняется!")
    }
    else
    {
        alert("Операция отклонена!")
    }