function conversionDegreeToKelvin(C){
   F = C * 1.8 + 32;
   return F;
}

function conversionKelvinToDegree(F){
   C = (F - 32) / 1.8;
   return C; 
}

console.log("фаренгейт: " + conversionDegreeToKelvin(25));
console.log("градусы: " + conversionKelvinToDegree(100));