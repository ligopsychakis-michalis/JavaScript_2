// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();


/* The 'a' at the begining initialize with '10'.
Inside the function 'x', the 'a' changes to '12' and function 'x'
returns an another function that makes an alert with the value of 'a' and function 'x'
calls this returning function.
So the call of function 'x' will show an alert with the value '12' */