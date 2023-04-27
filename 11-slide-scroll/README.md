## Debounce
Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently, by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, and API calls and improve performance.

---

![](https://i.stack.imgur.com/9WP3O.png)   

![](https://velog.velcdn.com/images%2Fsa02045%2Fpost%2Fd7132d1e-7eac-4598-aca8-f23d139b0ec8%2Fver2.png)

![](https://plantpot.works/wp-content/uploads/2021/10/getWindowSize.png)
Note:The offsetTop property returns the top position (in pixels) relative to the parent.

![](https://brooknovak.files.wordpress.com/2013/06/figure37.png)
![](https://javascript.ru/files/upload/ui/offset/offsetParent.png)
## window.scrollY
The `scrollY` property returns the pixels a document has scrolled from the upper left corner of the window.
The scrollY property is equal to the `pageYOffset` property.It's read only.

## window.innerHeight
The innerHeight property returns the height of a window's content area(viewport).
It is also read only.

## element.offsetTop
The HTMLElement.offsetTop read-only property returns the distance of the outer border of the current element relative to the inner border of the top of the `offsetParent`, the closest positioned ancestor element.

## element.offsetHeight
The `offsetHeight` property returns the viewable height of an element (in pixels), including padding, border and scrollbar, but not the margin.

## element.getBoundingClientRect()
```js
element.getBoundingClientRect().top;
element.getBoundingClientRect().x;
element.getBoundingClientRect().bottom;
element.getBoundingClientRect().y;
element.getBoundingClientRect().left;
element.getBoundingClientRect().right;
element.getBoundingClientRect().height;
element.getBoundingClientRect().width;
```
The `getBoundingClientRect`() method returns the size of an element and its position relative to the viewport.
![](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect/element-box-diagram.png)
![](https://assets.digitalocean.com/articles/alligator/js/getboundingclientrect/getBoundingClientRect-1.png)