function totalSum(priceItem, amountItem, discountItem){
    return priceItem * amountItem - priceItem * amountItem * discountItem / 100; 
}

console.log("Итоговая сумма с учётом скидки: " + totalSum(25000, 3 , 20));