//string
const firstName = 'sara'
console.log(firstName, typeof firstName);

// number
const age = 30;
const temp = 24.5;
const output1 = temp;
console.log(output1, typeof output1)

// boolean
const hasKids = true;
const output = hasKids;
console.log(output, typeof output)

// null
const aptNumber = null;
console.log(aptNumber);
console.log(aptNumber);

// undefined
let score;
const output2 = score;
console.log(output2)

//symbol
const id = Symbol('id');
const output4= id;
console.log(output4)

//BigInt
const n = 314159265359n;
console.log(n)
console.log(n , typeof n)

//reference types
const numbers = [1,2,3,4,5];
const x1 = numbers;
console.log(x1);
x1.push(6,7,8,9,10);
console.log(x1)
console.log(x1, typeof x1)


function sayHello(){
  console.log('hello');
}
const output5 = sayHello;
console.log(output5, typeof output5)



// -------------------
// -------------------
// -------------------
// -------------------

const person ={
  name:'kote',
  number:'123 45 67 89',
  email:'kshaburishvili@gmail.com'
}

person.age = '20';
person.email = 'not found'
console.log(person)
