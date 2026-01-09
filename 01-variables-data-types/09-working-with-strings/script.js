let x;

const name = 'john';
const age = 31;

x = 'hello, my name is ' + name + ' and my age is '+ age
console.log(x)

// Template Literals
x = `hello, my name is ${name} and my age is ${age}`


// string properties and methods 

const s = 'hello World'

x = s.length;

//acces value by kay
x = s[1];

x = s.__proto__;
console.log(x)
x = s.toUpperCase();;

x = s.charAt(0) // same as x = s[1];

x = s.indexOf('d')

x = s.substring(0, 5); // starts from 0 and ends with 5

x = s.substring(5); //starts from 5 and keep going left ro right
 
console.log(x)

