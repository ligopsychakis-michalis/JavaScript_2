// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/* At first it will console.log the value of '9'. Thats because the function 'f1' 
will return the value of '10' but that is not affect the variable 'x'.
After that it will console.log the object 'y' as 'x : 10' because 'y' is an object 
and the value of the key 'x' will change to '10'. */