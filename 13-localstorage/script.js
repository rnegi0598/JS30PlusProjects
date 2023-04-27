const form=document.querySelector('form');
const ul=document.querySelector('ul');

const items=JSON.parse(localStorage.getItem('items'))||[];



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    items.push({
      id:items.length,
      checked:false,
      value:e.target[0].value  
    })
    populateItem();
    //update in localStorage also
    localStorage.setItem('items',JSON.stringify(items));
    e.target.reset();
})
const populateItem=()=>{
    ul.innerHTML=items.map((item)=>{
        return `
        <li>
            <input class="hide" id="item${item.id}" type="checkbox" ${item.checked && 'checked'}> 
            <label for="item${item.id}">${item.value}</label>
        </li>
        `
    }).join('');
}

//This is event delegation
//instead of attaching eventListener to each li element we put it to their parent 
ul.addEventListener('click',(e)=>{
    // The matches() method returns true if an element matches a specific CSS selector(s).
    if(e.target.matches('input')===false) return ;
    //only input element will reach here
    //get the last digit of the string  , will fail for double digit
    const ind=e.target.id.slice(-1);
    items[ind]={
        ...items[ind],
        checked:!(items[ind].checked)
    }
    //update localStorage
    localStorage.setItem('items',JSON.stringify(items));
    

})
//At page reload or load
populateItem();