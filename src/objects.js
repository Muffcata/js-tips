//literal obiektowy

const book = {
  title: 'The last Kindgom',
  author: { firstName: 'Bernard', lastName: 'Cornwell' },
  genres: ['historical prose', 'adwenture'],
  isPublic: 'true',
  rating: 8.36,
  'test key with a space': 'test value',
  _t: 1,
  $t: 2,
};

console.log(book);

//accesing object properties
//1st way
console.log(book.title);
console.log(book._t);
console.log(book.author.firstName);
//2nd way - []
console.log(book['test key with a space']);
const key = 'rating';
console.log(book[key]);

console.log(book.nonExistingKey); //undifined

//modify object properties
book.rating++;
book.rating += 0.5;

book._t = 'new value';
book.genres.push('historical');
book.author.firstName = 'Ber N.';

book.translations = ['pl', 'en', 'de'];

console.log(book);

//modyfing

const arr7 = [1, 2, 3];
const exampleString = 'test string';
const obj = {
  arr7,
  exampleString,
};
//reference example
arr7.push(4);
//primitive values dont change
obj.exampleString = 'new changed string';
console.log(exampleString);
console.log(obj);

//declaring object with variable key
const propName = 'name';
const user1 = {
  [propName]: 'John Doe',
  propName: 'John Doe',
};
console.log(user1);

//methods

const bookShelf = {
  book: ['The last..', 'Dreams...'],
  getBook() {
    return this.book;
    // console.log('This method will return all the books');
  },
  addRandomBook() {
    this.addBook.push(Math.random());
  },
  addBook() {
    console.log('add new book');
  },
  removeBook(bookName) {
    const bookIndex = this.book.indexOf(bookName);
    if (bookIndex !== -1) {
      this.book.splice(bookIndex, 1);
    }
  },
};
bookShelf.addBook('Hobbit');
bookShelf.removeBook('The last..');
console.log(bookShelf.getBook());

//for...in

for (const key in book) {
  console.log(book[key]);
}

//for..in inherited [props]

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Mango';

console.log(dog);
console.log(dog.name);
console.log(dog.legs);

for (const key in dog) {
  console.log(key);
}

//object key and values

console.log(Object.keys(dog));
console.log(Object.values(dog));

//looping over keys and values

const keys = Object.keys(book);

console.log(keys);
// const values = Object.keys(book);
// console.log(values(book));

for (const key of keys) {
  console.log(key); //keys of props
  console.log(book[key]); //value of props
}

keys.forEach(key => {
  console.log(key);
  console.log(book[key]);
});
// values.forEach(value => {
//   console.log(value);
//   console.log(book[value]);
// });

//looping over entries
const entries = Object.entries(book);
console.log(entries);

//array in object

const homies = [
  {
    title: 'Room',
    rating: 8.38,
    author: 'Marta',
  },
  {
    title: 'Bathroom',
    rating: 8.4,
    author: 'Miks',
  },
];

for (const home of homies) {
  console.log(home.title);
}

homies.push({
  title: 'Kitchen',
  rating: 9.5,
  author: 'Dario',
});

const avgRating =
  homies.reduce(function (acc, home) {
    return acc + home.rating;
  }, 0) / homies.length;

console.log(homies);
console.log(avgRating);

const newHome = {
  title: 'Bathroom',
  rating: 5.55,
  author: 'FD',
};
homies.push(newHome);
homies[homies.length - 1].rating += 1; //change in array
console.log(homies);

console.log(newHome);

function changeAllRating(arrayOfHomies) {
  arrayOfHomies.forEach(home => {
    home.rating += 1;
  });
}
console.log(homies);
changeAllRating(homies);

//common elements
function getCommonElement(arr5, arr6) {
  const arr9 = new Set(arr5.inclues);
}
const arr5 = [1, 2, 3];
const arr6 = [3, 4, 5];

console.log(getCommonElement(arr5, arr6)); //=>[3]

//new Set()

const arr8 = [1, 2, 3, 4, 5];
const b = new Set(arr8);

console.log([...b]);

//commonElements
const arr10 = ['Marta', 'Darek', 'Michael'];
const arr11 = ['Marta', 'Kamil', 'Michael'];

const elCommon = arr10.filter(function (el) {
  return arr11.includes(el);
});

console.log(elCommon);

//spread

const temps = [14, 2, 10, 5];
console.log(...temps);

console.log(Math.max(...temps));

//spread arrays reference shallow copy

const arr14 = [1, 2, 3];
const arr15 = [...arr14];

arr15.push(4);
console.log(arr14);

//spread objects

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };

const third = { ...first, ...second };

console.log(third);

//rest multiply example

function multiply3(...args) {
  console.log(args);
  let total = 1;
  for (let i = 0; i < args.length; i++) {
    total *= args[i];
  }
  console.log(total);
}
multiply3();
multiply3(1);
multiply3(1, 2, 3, 4, 5);

//rest advantage over arguments
function addMoney(currencySymbol, ...amounts) {
  const totas = amounts.reduce(function (acc, el) {
    return acc + el;
  }, 0);
  console.log(`${currencySymbol}${totas}`);
}

addMoney('$', 15, 25, 12);

//destructuration

const cats = {
  name: 'Muff',
  surname: 'Dabrowski',
  adress: ['home'],
};
const { name, surname } = cats;

const message = `
This cat has a name of ${name} and surname ${surname}
`;
console.log(message);

//desctructarion nested

const { adress } = cats;
adress.push('room'); //reference
console.log(adress);

//nested destructaration expanded

const user5 = {
  tag: 'jglucke',
  stats: {
    followers: 5258,
    views: 478,
    likes: 1356,
  },
};
const {
  tag,
  stats: { followers: userFollowers, views: userViews },
} = user5;

console.log([tag, userFollowers, userViews]);

user5.stats.followers = 10000;
console.log(user5);
console.log(userFollowers);

//destructuration arrays
const colors = [255, 255, 100];
const [red, green, blue] = colors;
console.log(red, green, blue);

//destructuration

// function foo(param1, param2, param3 = 10, param4 = { level: 1 }) {
// //does magic
// }
function foo({
  param1,
  param2,
  param3 = 10,
  param4 = { level: 1 },
  param5 = 12,
}) {}
foo({ param1: 15, param2: 'test', param3: 32, param4: { level: 0 } });
foo({ param1: 10, param2: 'test' });
foo({ param1: 30, param2: 'mode', param3: 15 });

//n times 354 files, 15 projects
