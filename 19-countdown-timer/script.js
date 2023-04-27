
const display=document.body.querySelector('.time-display');
const buttons=Array.from(document.body.querySelectorAll('button[data-time]'));
const input=document.body.querySelector('input');
const msg=document.body.querySelector('.msg b');
//in input field on pressing enter key the countdown timer will start
input.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        if(!Number(e.target.value))return ;
        countdown(Number(e.target.value)*60);
        e.target.value='';
        e.target.blur(); //moves cursor out of the input field
    }
})
//oin clicking the respective button the respective countdown timer will start
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        countdown(parseInt(e.target.dataset.time));
    })
})
//we keep timerId to clear setInterval before calling on it another time
let timerId=-1;

//given time in sec start the timer
function countdown(time){
    
    clearInterval(timerId);

    const now=Date.now(); //in milli sec
    const then =now+time*1000;
    //time at which timer will end
    const endTime=new Date(then);
    // for msg calulate hours and min at which the timer will finish 
    const hours=endTime.getHours();
    const min=endTime.getMinutes();
    msg.innerHTML=`${hours>12?hours%12:hours}: ${min<10?'0'+min:min} ${hours>12?'pm':'am'}`
    //as callback function to setInterval will load after 1 sec , we call the function displayTime one time before the setInterval 
    displayTime(time);
    timerId=setInterval(()=>{
        const secLeft=Math.round((then-Date.now())/1000);
        if(secLeft<0){
            clearInterval(timerId);
            return;
        }
        //display time in counter
        displayTime(secLeft);
    },1000);

}
//given total time in sec display it in counter in min and secs
function displayTime(secLeft){
    const min=formatTime(Math.floor(secLeft/60));
    const sec=formatTime(secLeft%60);
    display.innerHTML=`
            ${min}:${sec}
        `
}
//given a digit , if it's single digit 0 is appended else nothing is done 
function formatTime(digit){
    return digit<10? `0${digit}`:digit;
}