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
function getCommonElement(arr5, arr6) {}
const arr5 = [1, 2, 3];
const arr6 = [3, 4, 5];

console.log(getCommonElement(arr5, arr6)); //=>[3]
//new Set()

const arr8 = [1, 2, 3, 4, 5];
const b = new Set(arr8);

console.log([...b]);
