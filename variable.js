//can reuse message again and again using variable
// to change the message everywhere just change it in variable
var message; 
message = "hello world";
console.log(message)
//can change the value using var
message = "hie";
console.log(message)


//to reduce steps 
let text = "javascript";
console.log(text)


//const is used to store constant value(not changed) wont chnge if u try to CONST NEED TO BE ASSIGNED A VALUE CANT LEAVE IT UNASSIGNED

const numberr = 10;
console.log(numberr);
// numberr=20;
// console.log(numberr);  THIS WILL RETURN ERROR

//difference between LET & VAR

//var is function-scoped, which means it's accessible throughout the entire function.

//let is block-scoped, which means it's only accessible within the nearest { } block.

function test() {
  if (true) {
    var x = 10;
    // let y = 20;
  }
  console.log(x); //  10 (var is function-scoped)
//   console.log(y); //  Error (let is block-scoped) 
}
test()

