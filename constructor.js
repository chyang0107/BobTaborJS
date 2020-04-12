// Construction Function Calls with the new keyword
// Date: 4/12

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('bmw','745i', 2010)
console.log(typeof myCar);