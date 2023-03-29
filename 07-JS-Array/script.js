
// string slice method
const str="abcdefgh";
str.slice(1,4);  // "bcd"
str.slice(1,-1);  // "bcdefg"

//array slice method
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.slice(1,4);   // ["Orange","Lemon", "Apple"]
fruits.slice(-4,-1);  //["Orange","Lemon", "Apple"]

// array splice method 
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

//array concat
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2); // ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
// const children=arr1.concat(arr2,arr3);  concatenate arr1 ,arr2 and arr3
// const arr1 = [1, 2, [3, 4]];
// const arr2 = [[5, 6], 7, 8];
// const arr3 = arr1.concat(arr2); [1,2,[3,4],[5,6],7,8]

//string concat
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2); //seafood
// let text1 = "Hello";
// let text2 = "world!";
// let text3 = "Have a nice day!";
// let result = text1.concat(" ", text2, " ", text3);  "Hello world! Have a noce day!"

// array join method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(" and "); // Banana and Orange and Apple and Mango
// let text = fruits.join(); //Banana,Orange,Apple,Mango

