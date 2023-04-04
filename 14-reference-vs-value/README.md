# The Difference Between Values and References in JavaScript

JS datatypes  
- primitives
    - numbers
    - strings
    - booleans
    - symbols
    - special values
        - null
        - undefined       
- objects
    - plain objects
    - arrays
    - functions

## Values
The simple rule of passing by value is that all primitive values in JavaScript are passed by value.     Passing by value means that every time you assign a value to a variable, a copy of that value is created.
```js
let a = 1;
let b = a;
b = b + 2;
console.log(a); // 1
console.log(b); // 3
```
When using the strict comparison operator ===, two variables having values are equal if they have the same value.
```js
const one = 1;
const oneCopy = 1;
console.log(one === oneCopy); // true
console.log(one === 1);       // true
console.log(one === one)
```
## References
When creating an object you're given a reference to that object. If 2 variables hold the same reference, then changing the object reflects in both variables.
```js
let x = [1];
let y = x;
y.push(2);
console.log(x); // [1, 2]
console.log(y); // [1, 2]
```
Comparison operator === works differently when comparing references. 2 references are equal only if they reference exactly the same object.
```js
const ar1 = [1];
const ar2 = [1];
console.log(ar1 === ar2); // false
console.log(ar1 === [1]);  // false
const ar11 = ar1;
console.log(ar1 === ar11); // true
console.log(ar1 === ar1);  // true
```
## JS Copy an Array
- Array.slice()
```js
const teamA=["jkd","ajdk","sjldj","jaj"];
const teamB=teamA.slice();
teamb[0]="hello"
console.log(teamA);  //["jkd","ajdk","sjldj","jaj"];
console.log(teamB)  //["hello","ajdk","sjldj","jaj"];
```
- Array.concat()
```js
const teamB=[].concat(teamA);
```
- spread Operator
```js
const teamB=[...teamA];
```

For deep clone:
```js
const numbers = [1, [2], [3, [4]], 5];

// Using JavaScript
JSON.parse(JSON.stringify(numbers));

// Using Lodash
_.cloneDeep(numbers);

```
## JS Copy an Object
- Spread Operator
```js
// Declaring Object
const userDetails = {
  name: "John Doe",
  age: 14,
  verified: false
};

// Cloning the Object with Spread Operator
let cloneUser = { ...userDetails };
// changing the value of cloneUser
cloneUser.name = "Jane Doe"
console.log(cloneUser); // {name: 'Jane Doe', age: 14, verified: false}
console.log(userDetails); // {name: 'John Doe', age: 14, verified: false}

```
You can only use the spread syntax to make a shallow copy of an object while deeper objects are referenced

- `Object.assign()`
You use this method to copy the values and properties from one or more source objects to a target object
```js
// Cloning the Object with Object.assign() Method
let cloneUser = Object.assign({}, userDetails);

// changing the value of cloneUser
cloneUser.name = "Jane Doe"

console.log(cloneUser); // {name: 'Jane Doe', age: 14, verified: false}


```
You can only use the Object.assign() method to make a shallow copy of an object while deeper objects are referenced. 
- `JSON.parse() and JSON.stringify()`   

```js
// Cloning the Object with JSON.parse() Method
let cloneUser = JSON.parse(JSON.stringify(userDetails));
cloneUser.name = "Jane Doe"

console.log(cloneUser.name); // 'Jane Doe'
console.log(cloneUser); // {name: 'Jane Doe', age: 14, verified: false}
```
You can use this to deeply clone, but it has some downsides.This method can be used for deep cloning but will not be the best option because it does not work with `function` or `symbol` properties.


## Shallow Clone vs. Deep Clone
So far, the example used in this article is a basic object with only one level. This means that we have only performed shallow clone(s). But when an object has more than one level, then you will be required to perform a deep clone.

```js
// Shallow object
const userDetails = {
  name: "John Doe",
  age: 14,
  verified: false
};

// Deep object
const userDetails = {
  name: "John Doe",
  age: 14,
  status: {
    verified: false,
  }
};

```
When you use the spread operator or Object.assign() method to clone a deep object, the deeper objects will be referenced.
```js
const userDetails = {
  name: "John Doe",
  age: 14,
  status: {
    verified: false
  }
};

// Cloning the Object with Spread Operator
let cloneUser = { ...userDetails };

// Changing the value of cloneUser
cloneUser.status.verified = true;

console.log(cloneUser); // {name: 'John Doe', age: 14, status: {verified: true}}
console.log(userDetails); // {name: 'John Doe', age: 14, status: {verified: true}}

```
You can use the JSON.parse() method, and everything will work fine.
```js
// Cloning the Object with Spread Operator
let cloneUser = JSON.parse(JSON.stringify(userDetails));

// Changing the value of cloneUser
cloneUser.status.verified = true;

console.log(cloneUser); // {name: 'John Doe', age: 14, status: {verified: true}}
console.log(userDetails); // {name: 'John Doe', age: 14, status: {verified: false}}

```
But there is an issue with this method. The issue is that you can lose your data. How?
JSON.stringify() works very well with primitive data types like numbers, strings, or Booleans, and that is what you have seen in our previous examples. But sometimes, JSON.stringify() is unpredictable if you are not aware of some values and how it handles them.

For example, it does not work with functions, symbols, or undefined values. It also changes other values like Nan and Infinity to null, breaking your code. When you have a function, symbol, or undefined value, it will return an empty key-value pair and skip it.
```js
const userDetails = {
  name: "John Doe",
  age: 14,
  status: {
    verified: false,
    method: Symbol(),
    title: undefined
  }
};

// Cloning the Object with Spread Operator
let cloneUser = JSON.parse(JSON.stringify(userDetails));
console.log(cloneUser); 

// Output
{
  name: "John Doe",
  age: 14,
  status: {
    verified: false
  }
};
```
The best option to implement deep cloning will be to use Lodash. You can then be sure that none of your data will be lost.
```js
const userDetails = {
  name: "John Doe",
  age: 14,
  status: {
    verified: false,
    method: Symbol(),
    title: undefined
  }
};

console.log(_.cloneDeep(userDetails));

```
[More on  How to Clone an Obj in JavaScript](https://www.freecodecamp.org/news/clone-an-object-in-javascript/)