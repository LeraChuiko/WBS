// console.info('First-class functions');

// A function can be assigned to a variable
// const myFunc = (param) => console.log(param);
// const sayHi = (name) => console.log("Привет, " + name);

// const anotherFunction = (callback, value) => {
//   callback(value);
// };
// anotherFunction(myFunc, "Jorge");
// anotherFunction(sayHi, "Artem");

// // A function can be returned by another function
// const addFactory = (add) => {
//   return (num) => num + add;
// };
// const addTwo = addFactory(2);
// console.log(addTwo(3)); // Outputs: 5

// const addThree = addFactory(3);
// const addFour = addFactory(4);

// console.log(addThree(3)); // Outputs: 6
// console.log(addFour(3)); // Outputs: 7

// // And that kiddos, is a function factory
// console.info("Higher-order array methods");

// // Observe how each method takes a function as parameter!
// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map((x) => x * x);
// console.log(squares); // [1, 4, 9, 16, 25, 36]

// const even = numbers.filter((x) => x % 2 === 0);
// console.log(even); // [2, 4, 6]

// numbers.forEach((x) => console.log(x)); // 1, 2, 3, 4, 5, 6

// // Array of numbers
// const numbers = [1, 2, 3, 4, 5];

// console.info('Logging each number multiplied by 2:');
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}: ${number * 2}`);
// });

// // Update array elements
// // Mutating the array is technically possible but discouraged!
// console.info('Updating array elements to be squared:');
// const whateverItReturns = numbers.forEach((number, index, arr) => {
//   arr[index] = number * number;
// });
// console.log('Squared Numbers: ', numbers);
// console.log('forEach does not return anything: ', whateverItReturns);

// Array of numbers
// const numbers = [1, 2, 3, 4, 5];

// // Create a new array of squares of the original numbers
// console.info('New array with squared numbers');
// const squares = numbers.map((number) => number * number);
// console.log('Squares:', squares);

// // Array of objects
// const people = [
//   { name: 'Alice', age: 15 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 35 },
// ];

// // Increase age by 1 and add a new field 'canVote'
// console.info('New array with additional properties');
// const updatedPeople = people.map((person) => ({
//   ...person,
//   age: person.age + 1,
//   canVote: person.age >= 18,
// }));
// console.log('The original people array remains the same:', people);
// console.log('Updated People:', updatedPeople);

// // Convert objects to array of names
// const names = people.map((person) => person.name);
// console.log('Names:', names);

// Array of objects representing people with ages
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 17 },
// ];

// // Check if there is any person younger than 18
// console.info('Check if there is any person younger than 18');
// const hasMinors = people.some((person) => person.age < 18);
// let answer=hasMinors?'yes':'no';
// console.log('Contains minors: ', answer); // Output: true

// // Check if all persons are older than 20
// console.info('Check if all persons are older than 20');
// const allAdults = people.every((person) => person.age > 20);
// console.log('All are adults: ', allAdults); // Output: false

// // Array of numbers
// const numbers = [2, 4, 6, 8, 10];

// // Check if any number is odd
// console.info('Check if any number is odd');
// const hasOddNumber = numbers.some((number) => number % 2 !== 0);
// console.log('Contains odd number: ', hasOddNumber); // Output: false

// // Check if all numbers are even
// console.info('Check if all numbers are even');
// const allEven = numbers.every((number) => number % 2 === 0);
// console.log('All numbers are even: ', allEven); // Output: true

// Array of numbers

// const numbers = [1, 2, 3, 4, 5];

// console.info('Sum of numbers:');
// const sum = numbers.reduce((acc, number) => acc + number, 0);
// console.log('Sum: ', sum); // Output: 15

// // Array of objects representing people
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 17 },
// ];

// console.info('Average age of people:');
// const averageAge = people.reduce((acc, person, index, array) => {
//   acc += person.age;
//   if (index === array.length - 1) {
//     return acc / array.length; // return average
//   }
//   return acc;
// }, 0);
// console.log('Average Age: ', averageAge); // Output: 24

// Counting occurrences of values
// const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

// console.info('Counting occurrences of each fruit:');
// const counts = items.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});
// console.log('Counts:', counts); // Output: { apple: 2, banana: 3, orange: 1 }

// // Transforming array data
// const products = [
//   { id: 1, price: 10 },
//   { id: 2, price: 15 },
//   { id: 3, price: 20 },
// ];

// console.info('Total price of all products:');
// const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
//console.log('Total Price: ', totalPrice); // Output: 45

// async function getTodo() {
//   try {
//     // 2. Делаем запрос. Код замирает и ждет, пока прилетит технический ответ (Response)
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//     // 3. Сразу проверяем, все ли хорошо (нет ли ошибки 404 или 500)
//     if (!response.ok) {
//       throw new Error(`Ошибка сервера! Статус: ${response.status}`);
//     }

//     // 4. Код снова замирает и ждет, пока сырые данные расшифруются в понятный JS-объект
//     const data = await response.json();

//     // 5. Всё готово! Выводим чистые данные в консоль
//     console.log('Успешно получили данные:', data);

//   } catch (error) {
//     // 6. Если пропал интернет или сработал наш throw new Error — мы окажемся здесь
//     console.error('Произошла ошибка при получении:', error);
//   }
// }

// // Вызываем нашу функцию
// getTodo();

//---------------------------------------------------------//
// 🧩 Fetch API: GET data and add to DOM *try/catch
// Шаг 1.Найти цель в HTML,  поиска элементов по ID <ul>
// Шаг 2. 🧩 Fetch Сбегать в сеть за задачами
//1. Делает запрос к правильному адресу API.
//2. Проверяет, что сервер ответил успешно (response.ok)
//3. Распаковывает данные в чистый массив с помощью .json().
//Шаг 3.  🧩 Display Data: Отрисовать задачи на экране (DOM + Tailwind): пробежаться по массиву
//1. Создать новый элемент списка <li>
//2. Посмотреть внутрь объекта задачи и найти там текст (свойство title) — записать его внутрь <li>
//3. внимание на статус!: Если задача сделана (completed: true):стили Tailwind, line-through. Если задача не сделана (completed: false): оставь её текст обычным
//4. Добавить готовый <li> внутрь твоего <ul> (используя appendChild или append).

const todoList = document.querySelector("#todo-list");

async function fetchAndDisplayTodos() {
  try {
    // step 2. 🧩 Fetch
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) throw new Error("Something went wrong");
    const results = await res.json();
    console.log(results);

    //step 3.  🧩 Display Data:
    results.forEach((r) => {
      const li = document.createElement("li");
      li.classList.add("border-b", "p-2", "bg-white");
      li.textContent = r.title;
      if (r.completed) {
        li.classList.add("line-through", "text-gray-400");
      }
      todoList.appendChild(li);
    });
  } catch (e) {
    console.error(e);
  }
}
fetchAndDisplayTodos();
