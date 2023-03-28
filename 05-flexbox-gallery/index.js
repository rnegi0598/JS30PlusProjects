const panels=Array.from(document.querySelectorAll('.panel'));
 
function clickHandler(e){
    //remove classes from every element
    panels.forEach((panel)=>{
        if(panel!=this){
            panel.classList.remove('open', 'open-active');
        }
    })
    //add open class
   this.classList.toggle('open');
   this.classList.toggle('open-active');

}
function transitionHandler(e){
    //on click two transition are taking place , when the clicked panel is moving from flex 1 to 5 and other where the closed panel is moving from 5 to 1.Therefore we must not add class for later one .Therefore check includes('open') is needed here.
    if(e.propertyName.includes('flex') && Array.from(e.target.classList).includes('open') ){
        this.classList.add('open-active');
    }
}
panels.forEach((panel)=>{    
    panel.addEventListener('click',clickHandler);
    panel.addEventListener('transitionend',transitionHandler);
})



/*
In function expression as callback if we access this ,it gives window object but when we use function statement as callback we get this as panel object;

panel.addEventListener('click',(e)=>{
        console.log(e); //target as p element and not panel
        console.log(this); //window object
        console.log(panel); //gives panel element
    })


function clickHandler(e){
    console.log(e); //target as p element
    console.log(this); //panel element
    console.log(panel);  //error

}

const clickHandler=(e)=>{
    console.log(e); //target as p element
    console.log(this); //window element
    console.log(panel);  //error
    console.log(e.target.parentElement); //gives panel element

}


*/