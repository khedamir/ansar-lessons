let balance = 5000;

// Покупка товара
let price = 1200;

if (balance >= price) {
  balance -= price;
  console.log("Покупка совершена!");
  console.log("Ваш баланс:", balance);
} else {
  console.log("Недостаточно средств!");
  console.log("Ваш баланс:", balance);
}

// Пополнение счёта
balance += 2000;
console.log("Счёт пополнен!");
console.log("Ваш баланс:", balance);

// Ещё одна покупка
price = 800;

if (balance >= price) {
  balance -= price;
  console.log("Покупка совершена!");
  console.log("Ваш баланс:", balance);
} else {
  console.log("Недостаточно средств!");
  console.log("Ваш баланс:", balance);
}

// Ещё одна покупка
price = 200;

if (balance >= price) {
  balance -= price;
  console.log("Покупка совершена!");
  console.log("Ваш баланс:", balance);
} else {
  console.log("Недостаточно средств!");
  console.log("Ваш баланс:", balance);
}





// let balance = 5000;

// function showBalance() {
//   console.log("Ваш баланс:", balance);
// }

// function buy(price) {
//   if (balance >= price) {
//     balance -= price;
//     console.log("Покупка совершена!");
//   } else {
//     console.log("Недостаточно средств!");
//   }

//   showBalance();
// }

// function deposit(amount) {
//   balance += amount;
//   console.log("Счёт пополнен!");
//   showBalance();
// }

// // Основная программа
// buy(1200);
// deposit(2000);
// buy(800);
// buy(800);
// buy(340);
// buy(800);
// deposit(4000)
// buy(800);









