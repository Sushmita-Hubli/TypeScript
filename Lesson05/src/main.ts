type One=string;
type Two=string|number;
type Three='hello';


//conversion to more or less specific
let a:One ="hello";
let b=a as Two;
b=33;