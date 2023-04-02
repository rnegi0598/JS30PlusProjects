# console

## Regular
```js
console.log('hello');
```

## Interpolated
```js
console.log('hello %s','joe')  //hello joe
```
## Styled
```js
console.log('%c hello','font-size:2rem')  //It will print hello with font 2rem
```
## Warning
```js
console.warn('oh no')  
```
## Error
```js
console.error('error')
```
## Info
```js
console.info('info')
```
## Testing
```js
console.assert(1==1,"here you write message on condition false") 
console.assert(1==2,"here you write message on condition false") //this will show message as condition is false
```

## Clearing
```js
console.clear()
```

## Viewing DOM elements
```js
const p=document.body.querySelector('p');
console.dir(p) //shows p as dom tree
```
![console.dir](https://skillforge.com/wp-content/uploads/2018/11/console2.png)
## counting
```js
console.count("apple")  //1
console.count("orange")  //1
console.count("apple")  //2
console.count("apple")  //3
console.count("orange")  //2
console.count("apple")  //4
console.count("orange")  //3
console.count("orange") //4
```
 ## Timing
 ```js
console.time('fetching data');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data=>data.json())
    .then(data=>{
        console.timeEnd("fetching data");
        console.log(data);
    })

// fetching data: 912ms - timer ended
 ```

 ## Table
 ```js
 console.table(obj);
 ```
