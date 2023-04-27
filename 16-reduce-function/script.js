const videos=Array.from(document.body.querySelectorAll('ul li'));
const totalTime=document.body.querySelector('.totalTime');
const totalSeconds=videos.map((video)=>{
    const [min,sec]=video.dataset.time.split(":");
    return Number(min)*60+Number(sec);
}).reduce((total,sec)=>{
    return total+sec;
},0);

const hoursLeft=Math.floor(totalSeconds/3600);
const minLeft=Math.floor((totalSeconds%3600)/60);
const  secLeft=Math.floor((totalSeconds%3600)%60);
console.log(hoursLeft)
console.log(minLeft)
console.log(secLeft)
totalTime.innerHTML=`
<span>Total Time </span>
<span class="hours">${hoursLeft}</span> :
<span class="min">${minLeft}</span> :
<span class="sec">${secLeft}</span>
`