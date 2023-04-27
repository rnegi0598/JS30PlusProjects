const ul=document.body.querySelector('.wrapper ul');
const bands = ['An Old Dog','The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here'];

const strip=(bandName)=>{
    return bandName.replace(/^(a |the |an )/i,'').trim();
}
const sortedBands=bands.sort((a,b)=>{

    if(strip(a)>strip(b)){
        return 1;
    }else{
        return -1;
    }
})

ul.innerHTML=sortedBands.map((band)=>{
    return `
    <li>${band}</li>
    `
}).join('');