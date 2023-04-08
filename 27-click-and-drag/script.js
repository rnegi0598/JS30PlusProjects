const items=document.body.querySelector('.items');

let mouseDown=false;
let xStart;
let scrollStart;
const speed=2;
items.addEventListener('mousedown',(e)=>{
    mouseDown=true;
    xStart=e.x-items.offsetLeft;
    scrollStart=items.scrollLeft;
    items.classList.add('active');

    
})
items.addEventListener('mouseup',(e)=>{
    mouseDown=false;
    items.classList.remove('active');


    
})
items.addEventListener('mouseleave',(e)=>{
    mouseDown=false;
    items.classList.remove('active');


    
})
items.addEventListener('mousemove',(e)=>{
    e.preventDefault();
    if(!mouseDown) return ;
    const newX=e.x-items.offsetLeft;
    const walk=xStart-newX;
    items.scrollLeft=scrollStart+walk*speed;

    
})