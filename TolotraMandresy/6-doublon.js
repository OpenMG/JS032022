let tab= [23, 23, 23, 3, 4, 5, 5, 5, 1, 0, 3];
let doublons=[];

for(let i=0; i<tab.length; i++){
    let nbr= tab[i];
    if(doublons.includes(nbr))
        continue;

    let cpt=0;
    for(let j=i+1; (j<tab.length)&&(cpt==0); j++)
        if(nbr==tab[j])
            cpt++;
    if(cpt)
        doublons.push(nbr);
}

console.log(doublons);