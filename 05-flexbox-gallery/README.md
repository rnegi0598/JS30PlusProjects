# Flex Gallery
[How to change background-image opacity in CSS without affecting text](https://coder-coder.com/background-image-opacity/)


[How to disable text selection highlighting]( https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting)

## : vs ::
- : now represents pseudo-classes (`:hover :link :visited :active :focus :checked :disabled :enabled :first-child :last-child :nth-child()`)  
    - Pseudo-classes represent variations of a state of an element
    - When the condition is satisfied, the whole element is selected.
    - `a:hover` MUST come after `a:link` and `a:visited` in the CSS definition in order to be effective! `a:active` MUST come after `a:hover` in the CSS definition in order to be effective!
    ```css
    div:link{

    }
    div:visited{

    }
    div:hover{

    }
    div:active{

    }

    ```
    ```html
    <div class="parent">
        <p>paragraph</p>
    </div>
    ```
    when parent is hovered p's color will be changed to red
    ```css
    .parent:hover p{
        color:'red';
    }
    ```
- :: represents pseudo-elements ( `::before ::after ::first-letter ::first-line ::marker`)

When open class is added to div with class panel and you want to add style to ::before element
```css
.panel.open::before{

}

```
## Screenshot
![app](images/app.gif)
