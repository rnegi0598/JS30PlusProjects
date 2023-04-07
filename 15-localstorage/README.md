# Event delegation
Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.  
The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.  
In the handler we get event.target to see where the event actually happened and handle it.

# localStorage
The localStorage object allows you to save key/value pairs in the browser.  
The localStorage object stores data with no expiration date.  
The data is not deleted when the browser is closed, and are available for future sessions.

```js
//for primitives
localStorage.getItem('count');
localStorage.setItem('count',3);

//for objects
const items=JSON.parse(localStorage.getItem('items')) ||[]; 
localStorage.setItem('items',JSON.Stringify(itemsobj));

```


# event.preventDefault()
The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.  
Not all events are cancelable