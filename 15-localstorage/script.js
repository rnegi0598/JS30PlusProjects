const form=document.querySelector('form');
const ul=document.querySelector('ul');
const items=[];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    items.push({
      id:items.length,
      checked:false,
      value:e.target[0].value  
    })
    populateItem();
    e.target.reset();
})
const populateItem=()=>{
    ul.innerHTML=items.map((item)=>{
        return `
        <li>
            <input class="hide" id="item${item.id}" type="checkbox" ${item.checked || 'checked'}> 
            <label for="item${item.id}">${item.value}</label>
        </li>
        `
    }).join('');
}

ul.addEventListener('click',(e)=>{
    if(e.target.matches('input')===false) return ;
    const ind=e.target.id.slice(-1);
    items[ind]={
        ...items[ind],
        checked:!(items[ind].checked)
    }

})