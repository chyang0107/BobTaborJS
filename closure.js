function sayHello(name, age) { 
    console.log(age);
    return function () {
        age = age + 1
        console.log(
           'howdy ' + name + age
        ) 
    }     
}
let bob = sayHello('Bob', 12);
bob()