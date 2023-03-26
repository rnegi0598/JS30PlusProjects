const secHand=document.querySelector('.sec-hand');
const minHand=document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');

setInterval(()=>{
    const date=new Date();
    const sec=date.getSeconds();
    const secDeg=((sec/60)*360)+90;
    const min=date.getMinutes();
    const minDeg=((min/60)*360)+90;
    const hour=date.getHours()%12;
    const hourDeg=((hour/12)*360)+90;

    secHand.style.rotate=`${secDeg}deg`;
    minHand.style.rotate=`${minDeg}deg`;
    hourHand.style.rotate=`${hourDeg}deg`;


},1000);