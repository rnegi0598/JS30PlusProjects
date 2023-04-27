const nav=document.body.querySelector('nav');  
const navTop=nav.offsetTop;
window.addEventListener('scroll',(e)=>{
    if(window.scrollY >= navTop){
        document.body.classList.add('nav-fixed');
    }else{
        document.body.classList.remove('nav-fixed');

    }
})