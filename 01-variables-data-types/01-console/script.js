//console.warn('wasup?')
const x = 100;
console.log(x);
console.error(x);
console.warn(x);

console.table({name: 'kote', email: 'shaburishvilikotiko@gmail.com'})

console.group('simple');
console.log('hello');
console.log('yes');
console.groupEnd();

const style = 'padding: 10px; background-color: blue; color:red; font-size: 20px; border-radius:8px;'
console.log('%chello world',style)