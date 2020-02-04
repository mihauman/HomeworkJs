const carrot = 123.965;
const egg = 15.678;
const onion = 90.2345;
const money = 500;

const maxPrice = Math.max(egg,carrot,onion);
const minPrice = Math.min(egg,carrot,onion);
const sum = egg + carrot + onion;
const wholePart = Math.floor(egg) + Math.floor(carrot) + Math.floor(onion);
const rest = money - sum;
const middlePrice = sum / 3;
const thous = Math.ceil(sum / 100) * 100;

console.log(minPrice % 2 !==0)

const price = Math.random(100)*400;
const discount = Math.floor(Math.random()*100);
const sumDiscount = price*discount/100;
const sumPay = (price - (price*discount/100)).toFixed(2);
const lostProfit = (price/2) - sumDiscount;

console.log(`Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Сума: ${sum}
Ціла частина вартості всіх товарів: ${wholePart}
Сума товарів округлених до сотень: ${thous}
Сдача з 500 грн: ${rest}
Середнє значення цін: ${middlePrice}
Ціна: ${price}
Знижка: ${discount}
Ціна для оплати: ${sumPay}
Упущена вигода: ${lostProfit}`);
