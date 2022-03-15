let tab= [12, -3, -4, 0, 1];
let neg=0, pos=0;

for(let i=0; i<tab.length; i++){
    if(tab[i]<0)
        neg+=tab[i];
    else
        pos+=tab[i];
}

console.log("negatives: " + neg);
console.log("positives: " + pos);
