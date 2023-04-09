
const display=document.body.querySelector('.time-display');
const buttons=Array.from(document.body.querySelectorAll('button[data-time]'));
const input=document.body.querySelector('input');
const msg=document.body.querySelector('.msg b');
input.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        if(!Number(e.target.value))return ;
        countdown(Number(e.target.value)*60);
    }
})
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        countdown(parseInt(e.target.dataset.time));
    })
})
let timerId=-1;

function countdown(time){
    //time in sec
    
    clearInterval(timerId);
    const now=Date.now();
    const then =now+time*1000;
    // 
    const endTime=new Date(then);
    const hours=endTime.getHours();
    const min=endTime.getMinutes();
    msg.innerHTML=`${hours>12?hours%12:hours}: ${min<10?'0'+min:min} ${hours>12?'pm':'am'}`
    // 
    displayTime(time);
    timerId=setInterval(()=>{
        const secLeft=Math.round((then-Date.now())/1000);
        if(secLeft<0){
            clearInterval(timerId);
            return;
        }
        //work
        displayTime(secLeft);
        
        
    },1000);

}

function displayTime(secLeft){
    const min=formatTime(Math.floor(secLeft/60));
    const sec=formatTime(secLeft%60);
    display.innerHTML=`
            ${min}:${sec}
        `
}
function formatTime(time){
    return time<10? `0${time}`:time;
}