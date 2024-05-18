function rateCalculator(carPower)
{
    let taxRate
    if(carPower < 100)
        {
        taxRate = 12
        }
        else if(carPower >= 100 && carPower < 125)
            {
                taxRate = 25
            }
            else if(carPower >= 125 && carPower < 150)
                {
                    taxRate = 35
                }
                else if(carPower >= 150 && carPower < 175)
                    {
                        taxRate = 45
                    }
                    else if(carPower >= 175 && carPower < 200)
                        {
                            taxRate = 50
                        }
                        else if(carPower >= 200 && carPower < 225)
                            {
                                taxRate = 65
                            }
                            else if(carPower >= 225 && carPower < 250)
                                {
                                    taxRate = 75
                                }
                                else if(carPower >= 250)
                                    {
                                        taxRate = 150
                                    }
        return carPower * taxRate                            
}

let carPower = parseInt(prompt("Введите мощьность автомобиля: "))
let rate = parseInt(rateCalculator(carPower))
console.log(`Расчитанный налог равен: ${rate}`)
alert(`Расчитанный налог равен: ${rate}`);

