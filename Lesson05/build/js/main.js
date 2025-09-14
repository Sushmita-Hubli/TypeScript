//conversion to more or less specific
let a = "hello";
let b = a;
b = 33;
let c = a; // so the value of c can now be hello only.
let d = 'world';
let e = 22;
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    if (c === 'concat')
        return '' + a + b;
    return '';
};
// let myVal: string = addOrConcat(2,2,'concat');  this will give error bcoz myVal returns only string whereas addOrConcat returns either number or a string so we require type castring here
let myVal = addOrConcat(2, 2, 'concat');
//make sure in the belopw line, typescript shows no error but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
//THE DOM
const img = document.querySelector('img'); // or it can also be written as follows to tell typescript that its value is not null const img= document.querySelector('img')! ;
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
export {};
//# sourceMappingURL=main.js.map