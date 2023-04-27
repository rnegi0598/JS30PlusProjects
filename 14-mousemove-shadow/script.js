const hero=document.body.querySelector('.hero');
const box=document.body.querySelector('.box');
const walk=200;
hero.addEventListener('mousemove',(e)=>{
    const {x,y}=e;
    const {offsetWidth:width,offsetHeight:height}=hero;
    //x/width * walk gives distance relative to walk  and we subtract walk/2 to get distance from center to left as positive and right as negative.
    const xWalk=Math.round((x/width*walk)-walk/2);
    const yWalk=Math.round((y/height*walk)-walk/2);
   
    box.style.textShadow=`
    ${xWalk}px ${yWalk}px 5px  #808080
    `
})