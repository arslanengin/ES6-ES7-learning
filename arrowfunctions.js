//Arrow Funtions

//ES5
let welcomeES5 = function () {
    console.log('Hello from ES5');
}

//ES6
let welcomeES6 = () => {
    console.log('Hello from ES6');
}

//Without scope 
let welcomeES6 = () => console.log('Hello from ES6 without scope');

//With parameters ES5
let sum = function (x, y) {
    return x + y;
}

//with parameters ES6
let sum = (x, y) => {
    return x + y;
}

//single line
let sum = (x, y) => x + y;
//with scope
let sum = (x, y) => { return x + y };

//ES5 
let split = function (text) {
    return text.split(' ');
}

//ES6
let splitES6 = (text) => text.split(' ');

//Object Literals

let getProductES5 = function (id, name) {
    return {
        id: id,
        name: name
    }
}

console.log(getProductES5('1', 'Samsung S8'));

//ES6

let getProductES6 = (id, name) => (
    {
        id: id,
        name: name,
    }
);

console.log(getProductES6('1', 'Iphone10'));


const phones = [

    { name: 'Iphone 8', price: 6000 },
    { name: 'Iphone 7', price: 4000 },
    { name: 'Iphone 6', price: 3000 },
    { name: 'Iphone 5', price: 2000 },
]

let pricesES5 = phones.map(function (phone) {
    return phone.price;
});

console.log(pricesES5);
//ES6
let pricesES6 = phones.map(phone => phone.price)

//Filtering ES5

const arr = [1, 2, 3, 4, 5, 20, 14]

let evenES5 = arr.filter(function (a) {
    return a % 2 == 0;
})

console.log(evenES5);

//ES6
let evenES6 = arr.filter(a => a % 2 == 0);
