/* 
let person = {
  name: 'kote',
  age: 19,
  student: 'seu'
};

let newPerson = person;
newPerson.name = 'nika';
newPerson.age = 24;
newPerson.student = 'ibsu'


console.log(person)
*/


///
/**const name = 'nick';
const age = 26;

///
const person = {
  name: 'justin',
  age: 35
}

let newName = name; 
newName = 'john'
console.log(name, newName);
 */

///

let age;
age = 55;

function fn(age,senior,adult,minor){
if (age>= 80){
  return senior;
}else if (age>=40){
  return adult;
} else{
  return minor;
}
};

let result = fn(age,"senior","adult","minor");
console.log(result)