var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};
services['Розбити скло'] = "200 грн";
let price = 0;
let minValue = Infinity;
let minPrice = "";
let maxPrice = "";
let maxValue = - Infinity;
for (let i in services) {
    let value = parseInt(services[i]);
    price = price + value;
    if (value < minValue) {
    minValue = value;
    minPrice = i;
}
if (value > maxValue) {
    maxValue = value;
    maxPrice = i;
}
}
console.log("Загальна сума:", price + " грн");
console.log("Найдешевша послуга:", minPrice, "-", minValue + " грн");
console.log("Найдорожча послуга:", maxPrice, "-", maxValue + " грн");
