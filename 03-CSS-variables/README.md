# CSS Variables 
This lesson is about how to update the css variables using js.

## CSS variables
- CSS variables can have a global or local scope.
- Global variables can be accessed/used through the entire document, while local variables can be used only inside the selector where it is declared.
- To create a variable with global scope, declare it inside the `:root` selector.  
```css
:root{
    --blue:#3452eb;
    --red:#eb3459;
}
h1{
    background-color:var(--blue);
    color:var(--red);
}
```
- To create a variable with local scope, declare it inside the selector that is going to use it.
```html
<div class="parent">
    <h1></h1>
</div>
<div class="outer"></div>   
```  
```css
.parent{
   --blue:#3452eb;
   --red:#eb3459;
}
/*  variables can be accessed by children of the parent*/
.parent h1{
    color:var(--blue);   
}
/*  variables cannot be accessed outside of parent*/
.outer{
    color:var(--blue); /*This will not work*/
}
```
## filter property
The `filter` property defines visual effects (like blur and saturation) to an element (often `<img>`).  

`filter: none | blur(px) | brightness(%) | contrast(%) | grayscale(%) | invert(%) | opacity(%) | saturate(%)`    

To use multiple filters, separate each filter with a space.


## Events 
- change event   
The `change` event is fired for` <input>`, `<select>`, and `<textarea>` elements when the user modifies the element's value.
- mouse event
    - click : A user clicks on an element
    - contextmenu : A user right-clicks on an element
    - dblclick : A user double-clicks on an element
    - mousedown : A mouse button is pressed over an element
    - mouseenter : The mouse pointer moves into an element
    - mouseleave : The mouse pointer moves out of an element
    - mousemove : The mouse pointer moves over an element
    - mouseout : The mouse pointer moves out of an element
    - mouseover : The mouse pointer moves onto an element
    - mouseup : A mouse button is released over an element


# dataset 
It is property which provides an object of all the data-* attributes on the element.
```html
<div class="parent" data-name="abcd" data-age="23"></div>
```
```javascript
document.body.querySelector(".parent").dataset;
// This will produce object of data attributes and their values
/*
{
    name:"abcd",
    age:"23",
}
*/ 
```
## documentElement

The documentElement property returns a document's element.      
`document.documentElement` returns html object.

## DOM CSS property  
The style property returns the values of an element's style attribute.  
The style property returns a CSSStyleDeclaration object.
The CSSStyleDeclaration object contains all inline styles properties for the element. It does not contain any style properties set in the `<head>` section or in any external style sheets.  
- add style  
Change the color of "myH1":
```javascript
document.getElementById("myH1").style.color = "red";
```
Get the value of a "myP"s top-border:  
```javascript
let value = document.getElementById("myP").style.borderTop;
```
Note: In JS we use borderTop and not border-top

- Set a new CSS property:
The `setProperty()` method sets a new or modifies an existing CSS property in a CSS declaration block.   
`object.setProperty(propertyname, value, priority)`   
```javascript
document.body.querySelector('parent').style.setProperty("background-color", "yellow");
```
