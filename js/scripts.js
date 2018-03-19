function gallonsToLiters(gallons){
gallons = parseInt(prompt("enter number of gallons"));
return alert(gallons * 3.78541 + " liters");
}

function gramsToOunces(grams){
grams = parseInt(prompt("enter number of grams"));
return alert(grams * 0.035274 + " ounces");
}

function poundsToKg(pounds){
pounds= parseInt(prompt("enter number of pounds"));
return alert(pounds / 2.2);
}

gallonsToLiters();
gramsToOunces();
poundsToKg();
