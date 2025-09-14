type One=string;
type Two=string|number;
type Three='hello';


//conversion to more or less specific
let a:One ="hello";
let b=a as Two;
b=33;
let c =a as Three;   // so the value of c can now be hello only.

let d =<One> 'world';
let e=<String|number> 22;


const addOrConcat = (a:number , b:number , c:'add'|'concat'):number|string=>{
    if(c==='add') return a+b;
    if(c==='concat') return ''+a+b
    return ''
}

// let myVal: string = addOrConcat(2,2,'concat');  this will give error bcoz myVal returns only string whereas addOrConcat returns either number or a string so we require type castring here
let myVal:string =addOrConcat(2,2,'concat') as string;

//make sure in the belopw line, typescript shows no error but a string is returned
let nextVal:number=addOrConcat(2,2,'concat') as number;

//THE DOM
const img= document.querySelector('img') as HTMLImageElement;  // or it can also be written as follows to tell typescript that its value is not null const img= document.querySelector('img')! ;
const myImg=document.getElementById('#img') as HTMLImageElement;
const nextImg=<HTMLImageElement>document.getElementById('#img');

img.src
myImg.src