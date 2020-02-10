// function first(){
//     return this;
// }

// console.log(first()===global);
// this is Node's global 
// because this is where the
//first method was called

// function second(){
//     'use strict'
//     return this;
// }

// console.log(second()=== global);
// console.log(second()=== undefined);

// this depedends on HOW a function is called

//An Object can be passed as the first argument to call
// or apply and this will be bound to it

// let myObject = {value: 'My Object'};
// //value is set on the glbal object
// globalThis.value = 'Global object'

// function third(name) {
//     // Returns something different depending on how
//     // we call this method
//     return this.value + ' ' +name;
// }



// // console.log(third());

// //Both call and apply allow you to explicitly set
// //  what you want to represent 'this'. The difference 
// // us in how additional arguments to the function
// // are set

// console.log(third.call(myObject, 'bob'));
// console.log(third.apply(myObject, ['bob']));

function fifth(){
    console.log(this.firstName + ' ' + this.lastName)
}