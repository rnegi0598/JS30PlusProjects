# Arrays

## filter
- The filter() method creates a new array filled with elements that pass the condition provided by a function.  
- syntax
`array.filter(function(currentValue, index, arr), thisValue)`

## map
- map() creates a new array from calling a function for every array element.
- syntax  
`array.map(function(currentValue, index, arr), thisValue)`

## sort
- The sort() sorts the elements of an array.
- syntax `array.sort(compareFunction)`
- 
```javascript
const points = [40, 100, 1, 5, 25, 10];

// Sort the numbers in ascending order
points.sort(function(a, b){return a-b})
```
String comparison  
```javascript
const string1 = "hello"
const string2 = "world"

console.log(string1 > string2)
// false because h comes before w
console.log(string1 < string2)
// true 


```

## reduce
- The reduce() method executes a reducer function for array element.
- The reduce() method returns a single value: the function's accumulated result.
- syntax `array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

