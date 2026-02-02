//valuses are stored on the stack
const name = 'john';
const age = 30;

//reference values are stored on heap
const person = {
  name: 'brad',
  age:40
};

let newName = name;
newName = 'Johnathan'
console.log(newName);

let newPerson = person;
newPerson.name = 'bradley'



console.log(name, newName)
console.log(person, newPerson)



//string into number
let amount = '100';
amount = parseInt(amount);

if(true){
  console.log(amount*2)
};

let age1 = 50;


//number into string
age1 = age1.toString();

if(true){
  console.log(age1, typeof age1)
}

//there is 3 way to convert string into number
let score1 = 1;
let score2 = 2;
let score3 = 3;

score1 = parseInt(score1);
score2 = +score2;
score3 = Number(score3);

console.log(score1 ,typeof score1);
console.log(score2 ,typeof score2);
console.log(score3 ,typeof score3);
// -------------------
// -------------------
// -------------------
// -------------------
