//Answer to question 1
let cardArray = [
    {name:"Goodness Adeeyo", track:"Web Development", sex:"Female", age:"Under 18", img:"card1", food:"Fried rice", hobby:"Listening to music", gender:"She"},
    {name:"Great Pam", track:"Web Development", sex:"Male", age:"Under 18", img:"card4", food:"Jollof rice", hobby:"Listening to music", gender:"He"},
    {name:"Joshua Hycent", track:"Web Development", sex:"Male", age:"Over 18", img:"card5", food:"Fufu and Afhang soup", hobby:"Listening to music", gender:"He"},
]

let cardSection = document.querySelector('.card-section');
console.log(cardSection)


let cardHolder = ''
cardArray.forEach((trainee) => {
    console.log(trainee)
    cardHolder += `
    <div class="card">
    <div class="card-img">
        <img src="./img/${trainee.img}.jpg" alt="..." >
    </div>
    <div class="card-body">
        <span class="card-info">Name: <p>${trainee.name}</p></span>
        <span class="card-info">Track:<p>${trainee.track}</p></span>
        <span class="card-info">Age:<p>${trainee.age}</p></span>
        <span class="card-info">Gender:<p>${trainee.sex}</p></span>
        <span class="card-info">Hobby:<p>${trainee.hobby}</p></span>
        <span class="card-info">Favourite Food:<p>${trainee.food}</p></span>
    </div>
    </div>
    `
})

cardSection.innerHTML = cardHolder;

//Answer to question 2
let day;
switch () {
    case 0:
    day = "Sunday"
    break;
    case 1:
    day = "Monday"
    break;
    case 2:
    day = "Tuesday"
    break;
    case 3:
    day = "Wednesday"
    break;
    case 4:
    day = "Thursday"
    break;
    case 5:
    day = "Friday"
    break;
    case 6:
    day = "Saturday"
    break;
}

//Answer to question 3
const d = new Date();
console.log(d.toDateString());

let fruits = ["banana", "pineapple", "mango", "orange"];

//Answer to question 4
console.log(fruits.unshift("apple"));

//Answer to question 5
console.log(fruits.pop);

//Answer to question 6
let power = Math.pow(8, 3)

console.log(power)

//Answer to question 7
function product (a,b) {
    multiply = a * b
}

product(2 ,30)
console.log(multiply)

//Answer to question 8
let names = "Great Pam"

function hello () {
    hello = "Hello" + names
}

hello()
console.log(hello)