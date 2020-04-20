//Function Declarations
function sum(a,b){
    var c = a+b;
    return c;
}
console.log(sum(10,20));

//Function Expressions

const sum = function(a,b){
    var c= a+b;
    return c;
}
//a,b function arguments
console.log(sum(10,30));

//ES6 Default Parameter
const sum = function(a=0,b=0){ 
    var c=a+b;
    return c;
}

function args(){
    console.log(arguments)
}

function sumAll(){
    var total = 0;

    for(let i=0;i<arguments.length;i++)
        total+=arguments[i];
}

//Demo : Functions
var hesapA = {
    ad:'Engin Arslan',
    hesapNo : '12345678'

}