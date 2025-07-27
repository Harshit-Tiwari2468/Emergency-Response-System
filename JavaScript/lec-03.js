// ConversionOperations:-
let print1 = "string to number"
let string = "24";

let  num = Number (string);
console.log(print1);
console.table ([string,typeof string,num,typeof num]);

let print2 = "number to boolean"
let str ="24Har"
let n = Number (str);
console.log(print2);
console.table([str,typeof str,n,typeof n]);

let bool = 1;
let b = Boolean (bool);

let bool1 = 0;
let b1 = Boolean (bool1);

console.table([bool,typeof bool,b,typeof b,bool1,b1]);

let print3 = " boolean to number";
console.log(print3);

let bool2 = true
let num2 = Number (bool2);
let b2 = false 
let n2 = Number (b2);
console.table([bool2,typeof bool2,num2,typeof num2,b2,typeof b2,n2,typeof n2]);

/*
"24" => 24
24Har => NaN
true => 1, false=> 0
"" => false
"Harshit" => true 
*/