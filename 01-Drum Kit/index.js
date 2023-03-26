window.addEventListener('keydown',(event)=>{
    const audio=document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.currentTime=0;
    audio.play();
    const key=document.querySelector(`div[data-key="${event.keyCode}"]`);
    

    key.classList.add('playing');

});
const keys=Array.from(document.querySelectorAll('.key'));
keys.forEach((key)=>{
    key.addEventListener('transitionend',(event)=>{
        if(event.propertyName=='scale'){
            key.classList.remove('playing');
        }
    })
})