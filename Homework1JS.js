const carrot = 123.965;
const egg = 15.678;
const onion = 90.2345;
const money = 500;

maxPrice = Math.max(egg,carrot,onion);
minPrice = Math.min(egg,carrot,onion);
const sum = egg + carrot + onion;
wholePart = Math.floor(egg) + Math.floor(carrot) + Math.floor(onion);
rest = money - sum;
const middlePrice = sum / 3;
thous = Math.ceil(sum / 100) * 100;

if(minPrice % 2 !==0) {
console.log(false)
} else {
console.log(true)
}

price = Math.random(100)*400;
discount = Math.floor(Math.random()*100);
sumDiscount = price*discount/100;
sumPay = (price - (price*discount/100)).toFixed(2);
lostProfit = (price/2) - sumDiscount;

console.log(`Максимальна ціна: ${maxPrice}`);
console.log(`Мінімальна ціна: ${minPrice}`);
console.log(`Сума: ${sum}`);
console.log(`Ціла частина вартості всіх товарів: ${wholePart}`);
console.log(`Сума товарів округлених до сотень: ${thous}`);
console.log(`Сдача з 500 грн: ${rest}`);
console.log(`Середнє значення цін: ${middlePrice}`);
console.log(`Ціна: ${price}`);
console.log(`Знижка: ${discount}%`);
console.log(`Ціна для оплати: ${sumPay}`);
console.log(`Упущена вигода: ${lostProfit}`);
