const inputELem=document.querySelector('input');
const suggestionElem=document.querySelector('ul');

inputELem.addEventListener('change',displayMatches);
inputELem.addEventListener('keyup',displayMatches);

const endpoint='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities=[];

async function getCityData(){
    try{
        const response=await fetch(endpoint);
        if(!response.ok){
            throw new Error('error fetching data',response.statusText);
        }
        const jsonData=await response.json();
        cities.push(...jsonData);
        init();
    }catch(err){
        console.log(err);
    }
    
}


getCityData();


function init(){
    const html=cities.map((place)=>{
       
        return `
        <li>
            <span class="place">[ ${place.city} , ${place.state} ]</span>
            <span class="population">( ${place.population} )</span>
        </li>
            `;
    }).join('');
    suggestionElem.innerHTML=html;

}

function findMatches(wordToMatch,cities){
    return cities.filter((place)=>{
        const regex=new RegExp(wordToMatch,'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}

function displayMatches(e){
    const matchArray=findMatches(this.value,cities);
    const regex=new RegExp(this.value,'gi');
    
    const html=matchArray.map((place)=>{
        const cityName=place.city.replace(regex,`<span class="hl">${this.value}</span>`);
        const StateName=place.state.replace(regex,`<span class="hl">${this.value}</span>`);
        const population=numberWithCommas(place.population);
        return `
        <li>
            <span class="place">[ ${cityName} , ${StateName} ]</span>
            <span class="population">( ${population} )</span>
        </li>
            `;
    }).join('');
    if(matchArray.length===0){
        suggestionElem.innerHTML=`<p class="not-found">${this.value} not found</p> `
    }else{
        suggestionElem.innerHTML=html;
    }
}
