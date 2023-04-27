const nav=document.body.querySelector('nav');  //offsetTop
const navTop=nav.offsetTop;
window.addEventListener('scroll',(e)=>{
    // console.log(window.scrollY);
    if(window.scrollY >= navTop){
        document.body.classList.add('nav-fixed');
    }else{
        document.body.classList.remove('nav-fixed');

    }
})