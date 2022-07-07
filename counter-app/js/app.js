let count = 0;

let button = document.querySelectorAll('.btn');
let value = document.querySelector('#value');

button.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target)
        let currentBtn = e.target;
        console.log('hi', currentBtn.classList)
        if(currentBtn.classList.contains('decrease')) {
            count--;
            console.log(count)
            value.innerHTML = count;
        }else if(currentBtn.classList.contains('increase')) {
            count++;
            console.log(count)
            value.innerHTML = count;
        }else {
            count = 0;
            console.log(count)
            value.innerHTML = count;
        }

        // change the color
        if (count < 0) {
            value.classList.add('red')
        }else if (count > 0) {
            value.classList.add('green')
        }else {
            value.classList.add('orange')
        }
})
     
})

//Color flipper

const colors = ["yellow", "red", "blue", "green", "purple", "orange", "pink", "brown", "black"];

let flipButton = document.querySelector('.color-flip')