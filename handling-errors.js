// let a = 7 * undefined/'panama';
// console.log(a);

function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('If the previous line of code throws an exception you \'ll never see this');
}

beforeTryCatch();