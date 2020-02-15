// let name = 'bob';
console.log(`hi ${name}`); 	// console.log(`hi ${name}`);

// let sentence = `This is why I like the 
// Javascri and ASP.NET
// test 0214/2020

// console.log(sentence)

function getReasonCount() {
    return 2;
}

let interpolation = `Give me ${(getReasonCount()==1)?'one good reason':'a few reasons'} to try this.`
console.log(interpolation); 
