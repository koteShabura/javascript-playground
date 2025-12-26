console.log('hello');

let x;
x = 5 + '5';
//output 55

x = 5 + Number('5')
//output 10

x = 5 * '5';
// output is 55 same as 5*5 bc js convert sting into number itself

x = 5 + null;
// output 5 

x = Number(null);
console.log(x, typeof x)
// output is 0 'number'

x = Number(true);
//output is 1 bc true = 1 an opposite false is 0
x = Number(false);
// output is 0 ofc as i said :)

x = 5 + true;
// LOL output is 6 
x = 5 + true*2;
//output is 7 it same as x = 5 + 1*2
x = 5 + false;
//its 5 bc false = 0

console.log(x);
