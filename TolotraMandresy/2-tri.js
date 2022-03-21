let tab= [23, 0, -23, 1, 5, 0];
let crois=[], decrois=[0];
let min;

console.log("Tableau initial: " + tab);

for(let i= 0; i<tab.length; i++){
    min= tab[i];

    for(let j=i+1; j<tab.length; j++){
        if(min>tab[j]){
            permuter(i,j);
            min= tab[i];
        }
    }

    if(!crois.includes(min))
        crois.push(min);
    if(!decrois.includes(min))
        decrois.unshift(min);
}

console.log("Tri decroissant: " + decrois);
console.log("Tri croissant: " + crois);

function permuter(i,j){
    tab[i]+= tab[j];
    tab[j]= tab[i]-tab[j];
    tab[i]= tab[i]-tab[j];
}