const inputs=document.querySelectorAll('.controls input');
// reset input to default values
inputs.forEach((input)=>{
    if(input.name=="base"){
        input.value="#E68D09";
    }else if(input.name=="spacing"){
        input.value="10";
    }else if(input.name=="blur"){
        input.value="1";
    }
})
//adding eventListener
inputs.forEach((input)=>{
    input.addEventListener('change',(event)=>{
        let propertyName=`--${event.target.name}`;
        let propertyVaue=`${event.target.value}${event.target.dataset.sizing||''}`;
        document.documentElement.style.setProperty(propertyName,propertyVaue);
    });
});