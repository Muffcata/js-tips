//function
//parameters - x,y,z
function multiplay(x, y, z = 1) {
  console.log(`x*y*z=${x * y * z}`);
}
//arguments-2,5,10
multiplay(2, 5);

//function foo return

function foo(x, y, z) {
  if (typeof x === 'undefined') {
    return 'x is not a number';
  }
  return x * y * z;
}

console.log(foo(1, 2, 3));

//function mapped

function boo() {
  let total = 1;
  for (const arg of arguments) {
    total *= arg;
  }
  return total;
}

console.log(boo(1, 2, 3, 4, 5));

function mapFoo() {
  const args = [...arguments];
  return args.reduce(function (acc, el) {
    return acc * el;
  }, 1);
}
console.log(mapFoo(1, 2, 3, 4));

//function rest

function multiply(...args) {
  args.push(7);
  return args.reduce(function (acc, el) {
    return acc * el;
  }, 1);
}
console.log(multiply(1, 2, 3, 4));

//function early return

function withdraw(amount, balance) {
  if (amount === 0) {
    console.log('not enough');
    return;
  } else if (amount > balance) {
    console.log('a little bit poor');
    return;
  } else {
    console.log('withdraw');
  }
}

withdraw(100, 2000);
withdraw(100, 50);
withdraw(0, 20);

//function vs const function

function abc(a, b) {
  return a * b;
}
console.log(abc(5, 10));

const cba = function (a, b) {
  return a * b;
};
console.log(cba(20, 10));

//multiple prameters
function xxx({ currencySymbol, amount, balance }) {
  if (amount === 0) {
    console.log('not enough');
    return;
  } else if (amount > balance) {
    console.log('a little bit poor');
    return;
  } else {
    console.log('withdraw');
  }
}

xxx({ currencySymbol: '$', amount: 100, balance: 2000 });

//scope 1

const globalValue = 10;
console.log(globalValue);

function bar() {
  console.log(globalValue);
}
for (let i = 0; i < 5; i++) {
  console.log(globalValue);
  bar();
}
bar();

//scope 2
function cat() {
  const a = 20;
  console.log(a);
}
cat();
//console.log(a)//reference error

//stack lifo 1- stos wywołań

function back() {
  console.log('back');
}

function baz() {
  console.log('baz');
}
function bazzz() {
  console.log('bazzz');
  baz(); //2
  back(); //3
}
bazzz(); //1

//stack lifo 2
function fnA() {
  console.log(1);
  fnB();
  console.log(2);
}
function fnB() {
  console.log(3);
}
console.log(4);
fnA();
console.log(5);

// 4, 1 ,3, 2, 5

//Fibbonacci - recursion

//1,1,2,3,5,8,13,21...

const getFibb = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    let s = getFibb(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
console.log(getFibb(5));

const getFibbNElem = function (n, log = true) {
  if (n <= 1) return 1;
  console.log(`n=${n}; fibb(n-1)=${getFibbNElem(n - 1, false)};
fibb(n-2)=${(getFibbNElem(n - 2), false)}}`);
  return getFibbNElem(n - 1, log) + getFibbNElem(n - 2, log);
};

console.log(getFibbNElem(5));

//factorial

//4! => 1*2*3*4 =>24

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));

//4* factorial(3)
//factorial z 3=3* factorial(2)
//factorial z 2 =2*factorial(1)
//factorial z 1 =1*factorial(0)
//factorial z 0=1//break warunek graniczny

//arr

const arr = [1, 2, 3, 4, 5];
let added = 0;

function add(arr) {
  if (arr.length > 0) {
    //table has not got elem
    added += arr[arr.length - 1]; //to 0 add last elem on the table
    arr.pop(); //remove last elem

    add(arr); //call the func repeat
  }
}

add(arr);
