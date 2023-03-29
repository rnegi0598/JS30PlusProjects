# some() method
array.some((value, index, arr)=>{}, this)  
Return Value : true if any of the aray elements pass the test, otherwise false.
```js
// Check if any values are over 18:
const ages = [3, 10, 18, 20];
const ages = [3, 10, 1, 2]; //some will return false for this as there are no element above 18

isAnyAbove18=ages.some((age)=>{
  return age > 18;
});
// isAnyAbove18=true
```
# every() method
array.every((currentValue, index, arr)=>{}, thisValue)
Return Value : true if all elements pass the test, otherwise false.
```js
// Check if all values in ages[] are over 18
const ages = [32, 33, 16, 40];
AllAbove18=ages.every((age)=>{
  return age > 18;
})
// AllAbove18=false as 16 is not more than 18
```

# find() method
array.find((currentValue, index, arr)=>{},thisValue)
Return Value : The value of the first element that pass the test.
Otherwise it returns undefined.
```js
// Find the value of the first element with a value over 18:
const ages = [3, 10, 18, 20,34];
above18=ages.find((age)=>{
  return age > 18;
})
// above18=20
```

# findIndex() method
array.findIndex((currentValue, index, arr)=>{}, thisValue)
Return Value :  The index of the first element that passes the test.
Otherwise -1.
```js
// Find the index of the first element with a value over 18:
const ages = [3, 10, 18, 20,34];
above18Ind=ages.find((age)=>{
  return age > 18;
})
// above18Ind=3
```

# string slice method
string.slice(start, end) 
[start , end) eg: [2,6) ==2,3,4,5 
end is optional , default is string length.A negative number selects from the end of the string. -1 means length of the string - 1 .
Return Value : 	The extracted part of the string.

# array slice method
array.slice(start, end)
Return value : A new array containing the selected elements.
```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.slice(1,4);   // ["Orange","Lemon", "Apple"]
fruits.slice(-4,-1);  //["Orange","Lemon", "Apple"]
```

# array splice method
array.splice(index, howmany, item1, ....., itemX)  
- index :
    - Required . 
    - The position to add/remove items. 
    - Negative value defines the position from the end of the array.
- howmany : 
    - Optional . 
    - Number of items to be removed.
- item1 ...itemX : 
    - Optional . 
    - New elements(s) to be added.
Return Value : An array containing the removed items (if any).
The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.
```js
let animals=["dog","cat","bat","rat","cow","lion"];
// At position 2, add 2 elements, remove 1
animals.splice(2,1,"tiger","mouse");
//animals=[ "dog", "cat", "tiger", "mouse", "rat", "cow", "lion" ]
// At position 2 remove 2
animals.splice(2,2);
// animals=[ "dog", "cat", "rat", "cow", "lion" ]
// At position 3 add "turtle","bear"and "hare".
animals.splice(3,0,"turtle","bear","hare");
// animals=[ "dog", "cat", "rat", "turtle", "bear", "hare", "cow", "lion" ]
```

# array join method
array.join(separator)   
separator is optional. The separator to be used. Default is a comma.
The join() method returns an array as a string.
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and "); // Banana and Orange and Apple and Mango
let text = fruits.join(); //Banana,Orange,Apple,Mango
```