let tab= [34, -27, 76, 100, -46, 27, 39, -50, 27, 32, 100];



let res=[], doublon= false;

// *methode 1: 
for(let i=0; (i<tab.length); i++){
    for(let j=0; (j<res.length)&&(!doublon); j++)
        doublon= (tab[i] == res[j]); 
    if(!doublon)
        res.push(tab[i]);
}

/* 
*methode 2:
for(let i=0; i<tab.length; i++){
    if(!res.includes(tab[i]))
        res.push(tab[i]);
} */

console.log(tab);
console.log(res);