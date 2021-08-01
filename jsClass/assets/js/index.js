"use strict";

class Worker {
  constructor(name, lastName, numberOfDays, salaryOneDay, isBonus) {
    if (typeof name !== "string" || typeof lastName !== "string") {
      throw new TypeError("Вы ввели неправильный тип данных");
    }
    if (
      isNaN(numberOfDays - salaryOneDay) ||
      typeof numberOfDays !== "number" ||
      typeof salaryOneDay !== "number"
    ) {
      throw new TypeError("Вы ввели не число");
    }
    if (numberOfDays < 0 || salaryOneDay < 0) {
      throw new RangeError("Введите положительное число");
    }

    this.name = name;
    this.lastName = lastName;
    this.numberOfDays = numberOfDays;
    this.salaryOneDay = salaryOneDay;
    this.isBonus = isBonus;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }

  getSalary() {
    let salary = this.numberOfDays * this.salaryOneDay;
    if (this.isBonus === true) {
      return (salary = salary + (salary / 100) * 25);
    }
    if (this.isBonus === false) {
      return salary;
    }
  }
}

const workman1 = new Worker("Ivan", "Ivanow", 5, 100, true);
console.log(workman1.getSalary());
const workman2 = new Worker("Dima", "Dmitrev", 5, 20, false);
console.log(workman2.getSalary());
