//declaration

class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    print(){
        console.log(`${this.make} ${this.model} ${this.year}`);
    }

}

let myCar = new Car('bmw', '745li', 2010)
myCar.print();

class SportCar extends Car {
    revEnginer(){
        console.log('Vrrom goes the ' + this.model);
    }
}

let mySportsCar = new SportCar('dodge', 'viper', 2011);
mySportsCar.print();
mySportsCar.revEnginer();
// myCar.revEnginer();

//expression
// let car = class {

// }