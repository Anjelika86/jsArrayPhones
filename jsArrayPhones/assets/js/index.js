"use strict";
function CreationPhone(model, manufacturer, price, color, inStock) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.price = price;
  this.color = color;
  this.inStock = inStock;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const manufacturerPhone = ["Samsyng", "Meizu", "Apple"];
const colorPhone = ["red", "grey", "blue"];
function getRandomeChoice(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

function getPhone(amount) {
  const newPhones = [];
  for (let i = 0; i < amount; i++) {
    newPhones.push(
      new CreationPhone(
        `Model ${i}`,
        getRandomeChoice(manufacturerPhone),
        getRandomInt(5000, 50000),
        getRandomeChoice(colorPhone),
        Math.random() >= 0.5
      )
    );
  }
  return newPhones;
}
const phones = getPhone(50);
console.table(phones);

function getAvaliblePhones(phonesArray) {
  let counter = 0;
  phones.forEach(function (phone) {
    if (phone.inStock) {
      counter++;
    }
  });

  return counter;
}
console.log(getAvaliblePhones(phones));

function getPhoneData(phoneArray) {
  const callback = function (phone) {
    const phonesStockMessage = phone.inStock ? "в наличии" : "нет в наличии";
    console.log(
      `${phone.manufacturer} ${phone.model} со стоимостью ${phone.price} UAH сейчас ${phonesStockMessage}`
    );
  };
  phoneArray.forEach(callback);
}

const phoneInStock = phones.filter((phone) => phone.inStock);

console.table(phoneInStock);

const discountPhone = phoneInStock.map(function (phone) {
  if (phone.price > 30000) {
    phone.price = Math.round(phone.price * 0.7);
  }
  return phone;
});
console.table(discountPhone);

const sortPhonesPrice = phones.sort(
  (firstPhone, secondPhone) => secondPhone.price - firstPhone.price
);
console.table(sortPhonesPrice);
