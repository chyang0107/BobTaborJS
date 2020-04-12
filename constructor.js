// Construction Function Calls with the new keyword
// Date: 4/12


// this initiate the new property
// the property get the value from the parameter 

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// new --> empty object

// let myCar = new Car('bmw','745i', 2010)
// console.log(typeof myCar);

function MyFunction() {
    console.log('I am a simple function');
}

let myFunction = new MyFunction();
console.log(typeof myFunction);
