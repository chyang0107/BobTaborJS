// Date: 05/05/2020
// Relationship between new car and original car
let originator = {
    make: 'bmw',
    model: '745i',
    year: 2010
}

let newCar = Object.create(originator);
console.log(newCar.make);

newCar.make = 'audi'
console.log(newCar.make);
console.log(newCar.whatever);

console.log(Object.getPrototypeOf(newCar));


originator.doors = 4;
console.log(newCar.doors);

console.log(originator.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));




