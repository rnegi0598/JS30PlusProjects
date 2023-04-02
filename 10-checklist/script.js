//on pressing shift key and checking check all the boxes between previous check and current one.
//on uncheck lastChecked will become null.
const checkboxes=document.body.querySelectorAll('input[type="checkbox"]');
let lastChecked=null;
function clickHandler(e){
    //if shift key is pressed and checked 
    if(e.shiftKey && e.target.checked && lastChecked!==null){
        let inBetween=false;
        checkboxes.forEach((checkbox)=>{
            if(inBetween){
                checkbox.checked=true;
            }
            if(checkbox===e.target || checkbox===lastChecked){
                inBetween=!inBetween;
            }
        })

    }

    if(e.target.checked){
        lastChecked=e.target;
    }else{
        lastChecked=null;
    }

}
checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener('click',clickHandler);
})


document.body.querySelector('button').addEventListener('click',()=>{
    checkboxes.forEach((checkbox)=>{
        checkbox.checked=false;
    });
    lastChecked=null;
})