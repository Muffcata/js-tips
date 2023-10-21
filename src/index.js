//iteration

const bestLanguage = 'javascript';

for (const char of bestLanguage) {
  console.log(char);
}

const clients = ['Marta', 'Darek', 'Gosia'];

for (let i = 0; i < clients.length; i++) {
  console.log(`${clients[i]}-index ${i}`);
}

let isThereClientNamedMarta = false;

for (const client of clients) {
  console.log('loop');
  if (client === 'Marta') {
    isThereClientNamedMarta = true;
    break;
  }
}
console.log(isThereClientNamedMarta);

const numbers = [1, 2, 3, 4, 5, 6, 7];
const threshold = 5;

for (const number of numbers) {
  if (number < threshold) {
    continue;
  }
  console.log(number);
}

//for each

const items = [1, 2, 3, 4, 5, 6];

items.forEach((item, i, arr) => {
  console.log(`${item}-index ${i}`, arr);
});

//reference arrays

const a = ['Adam'];
const b = a;
console.log(b);
b.push('John');

console.log(b);
console.log(a);

//array method -  split // join

const person = 'Adam Premium';
const splitName = person.split(',');
console.log(splitName);

const joinName = splitName.join('-');
console.log(joinName);

// index of

const names = ['Marta', 'Dawid', 'Kasia'];
console.log(names.indexOf('Marta'));
console.log(names.indexOf('Dawid'));

//includes

const users = ['John', 'Eve'];
console.log(users.includes('Eve'));

// push & pop & shift & unshift

const bm = [1, 2, 3];
bm.push(5); //add at the end
bm.pop(); //remove last element
bm.unshift(); //add at the start
bm.shift(); //remove first element
console.log(bm);

//slice - NOT MODIFY ORIGINAL

const nnn = [1, 2, 3];
console.log(nnn.slice(0, 2));

//splice - MODIFY ORIGINAL ARRAY

const ppp = [2, 3, 4, 5, 6, 7];
ppp.splice(0, 2);
console.log(ppp);

ppp.splice(2, 0, 'new'); //add new element
console.log(ppp);

//concat
const mmm = [1, 2, 3];
const qww = [2, 3, 4, 5, 6, 7];
const joinTab = mmm.concat(qww);
console.log(joinTab);

//find

const arr = [
  {
    name: 'Marta',
    surname: 'Daba',
  },
  {
    name: 'Kate',
    surname: 'Hudson',
  },
];
const x = arr.find(el => {
  console.log(el.name);
  return el.name === 'Kate';
});

console.log(x);

//filter  NOT MODIFY ARRAY

const arr2 = [
  {
    name: 'Marta',
    surname: 'Daba',
  },
  {
    name: 'Kate',
    surname: 'Hudson',
  },
  {
    name: 'Milly',
    surname: 'Hudson',
  },
  {
    name: 'SAAn',
    surname: 'Hudson',
  },
];

console.log(arr2.filter(el => el.surname === 'Hudson'));

//map - MODIFY ARRAY

const arr3 = [
  {
    name: 'Marta',
    surname: 'Daba',
  },
  {
    name: 'Kate',
    surname: 'Hudson',
  },
  {
    name: 'Milly',
    surname: 'Hudson',
  },
  {
    name: 'SAAn',
    surname: 'Hudson',
  },
];

const newArr3 = arr3.map(el => {
  if (el.surname === 'Hudson') {
    el.surname = 'Pitt';
  }
  return el;
});
console.log(newArr3);

//map primitive

const pages = [1, 2, 3, 4, 5];
const pagesMapped = pages.map(page => {
  page = page + 2;
  return page;
});
console.log(pagesMapped);

//reduce

const hoppies = [2, 3, 4, 5, 6];
const sumOfN = hoppies.reduce((acc, el) => {
  console.log(`acc=>${acc}; el=>${el}; acc+el${acc + el}`);

  return acc + el;
}, 0);
console.log(`reduce:${sumOfN}`);

const array5 = [1, 2, 3, 4, 5, 6];
const arrayOfNTimes2 = array5.reduce((acc, el) => {
  acc.push(el * 2);
  return acc;
}, []);
console.log(arrayOfNTimes2);
