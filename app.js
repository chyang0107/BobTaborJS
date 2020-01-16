// 10 Function Expressions
// setTimeout(function(){
//     console.log('I waited 5 seconds')
// }, 5000);

// let counter = 0;
// function timeout(){
//     setTimeout(function(){
//         console.log('hi ' + counter++);
//         timeout();
//     },2000);
// }

// timeout();
//ctrl + c

// (function() {
//     console.log('Immediately ivoked function expression(IIFE)');
// })()

// var count  = 3
// if (count == 4){
//     console.log('Count is 3')
// } else if (count > 4){
//     console.log('Count is greater than 4')
// } else if (count < 4) {
//     console.log('Count is less than four')
// }else{
//     console.log('Conunt is NOT 4')
// }

// let hero = 'Superman'
// switch (hero.toLocaleLowerCase()) {
//     case 'superman':
//         console.log('super strength');
//         console.log('x-ray version');
//         break;
//     case 'batman':
//         console.log('intelligence');
//         console.log('fighting skills');    
//         break;
//     default:
//         console.log('member of JLA');
// }

//ternary operator
// let a  = 1, b = '1';
// let result = (a !== b) ? 'not equal' : 'equal';
// console.log(result)

// for (i = 0; i < 10; i++ {
//     console.log(i);
// }

// let a = [4, 12, 133, 45, 73, 112]
// for (i = 0; i<a.length; i++){
//     console.log(a[i]);
// }

// for (let i = 0; i < a.length; i++) {
//     const c = a[i];
//     console.log(c)    
// }

// let x = 1;
// while ( x < 10) {
//     console.log(x)
//     x++
// }

// Date: 1/15/2020
// outside scope to inside scope

// let a = 'first'

// function scopeTest() {
//     console.log(a);
//     a = 'changed';
//     let b = 'second';
//     if (a != ''){
//         console.log(a);
//         console.log('inside if: ' + b);
//         let c  = 'third';
//     }
     
//     // console.log(I am doing the test on the github);
// }
// console.log(a);
// scopeTest();

// 14 Returning Functions from Functions
function one() {
    return 'one'
}

//let value = one();
//console.log(value);
//console.log(one());

//let value = one();
//console.log(typeof value);

// let value = one;
// console.log(value)

// function two() {
//     return function (){
//         console.log('two');
//     }
// }

// let myFunctin = two();
// myFunctin();

function three() {
    return function(){
        return 'three'
    }
}
console.log(three()());