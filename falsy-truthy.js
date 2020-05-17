// if (false){} else{console.log('false is falsy');}
// if (null){} else{console.log('null is falsy');}
// if (undefined){} else{console.log('undefined is falsy');}
// if (0){} else{console.log('0 is falsy');}
// if (NaN){} else{console.log('NaN is falsy');}
// if (''){} else{console.log('an empty string with single-quotes is falsy');}
// if (""){} else{console.log('an empty string with double-quotes is falsy');}

// if ({}){console.log('empty object is truthy');}
// if (Infinity){console.log('positive infinity is truthy');}


let pattern = /xyz/
let value = 'This is just a test';
let result = value.match(pattern);
console.log(result);

// null is related to object not primitive 

if (result === null){
    console.log('no match was found');
}