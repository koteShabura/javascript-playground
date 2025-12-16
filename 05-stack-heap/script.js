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
const name = 'nick';
const age = 26;

///
const person = {
  name: 'justin',
  age: 35
}

let newName = name; 
newName = 'john'
console.log(name, newName);

//////////////////////////////////////////

const a = 10;
let b = a;
b = 20;
console.log(a, b);

let x = { name: 'kote', age: 19 };
let y = x;
y.name = 'nika';
y.age = 24;
console.log(x, y);

const str = 'hello';
let str2 = str;
str2 = 'world';
console.log(str, str2);

let obj1 = { city: 'Tbilisi' };
let obj2 = { ...obj1 };
obj2.city = 'Batumi';
console.log(obj1, obj2);

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1, arr2);

let arr3 = [...arr1];
arr3.push(5);
console.log(arr1, arr3);

let n = 5;
function increase(num) {
  num++;
  return num;
}
console.log(n, increase(n));

let person = { name: 'alex', age: 22 };
function changePerson(p) {
  p.age += 1;
  return p;
}
console.log(person, changePerson(person));

const name1 = 'nick';
let newName = name1;
newName = 'john';
console.log(name1, newName);

const person2 = { name: 'justin', age: 35 };
let person3 = { ...person2 };
person3.name = 'mike';
console.log(person2, person3);
