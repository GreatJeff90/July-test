
const cars = ["Venza", "Ford", "Toyata", "Mercedes"];
undefined
for (let i = 0; i < 10; i += 2){
  console.log(i)
}

//For in loop
let person = {name:"Mkpafrang", age:"16", food:"pizza", car:"Ford",}; 
for (let x in person) {
    console.log(person[x])
  }
​
//For in loop
let numbers = ["16", "17", "18", "19", "20"];
for (let x in numbers) {
    console.log(numbers[x])
  };
  
//While loop  
let cars = ["Venza", "Ford", "Toyata", "Mercedes"];
let i = 0;
while (i < cars.length) {
  console.log(cars[i])
  i++
}

//loops
let numbers = ["16", "17", "18", "19", "20"]
for (let x in numbers) {
  console.log(numbers[x])
}

//DOM manipulation 
let fullName = document.querySelector('#fullName');
let email = document.querySelector('#email');
let age = document.querySelector('#age');
let form = document.querySelector('#form');

form.addEventListener('submit', checkForm)

function checkForm (e) {
  e.preventDefault();
  console.log('fullname', fullName.value);
  console.log('email', email.value);
  console.log('age', age.value);
}