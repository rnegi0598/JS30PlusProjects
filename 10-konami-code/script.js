const secretKey="secretkey";
const pressed=[];
const p=document.querySelector('p');
window.addEventListener('keydown',(e)=>{
    pressed.push(e.key);
   
    pressed.splice(-10,pressed.length-secretKey.length);
    
    if(pressed.join("").includes(secretKey)){
        p.classList.add("rotate-scale-up")
    }else{
        p.classList.remove("rotate-scale-up")
    }
})