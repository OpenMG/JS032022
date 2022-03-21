let tab= [23, 23, 23, 3, 4, 5, 5, 5, 1, 0, 3];
let doublons=[];
let cptExt=0;

for(let i=0; i<tab.length; i++){
    if(doublons.includes(tab[i]))
        continue;

    let cptInt=0;
    for(let j=i+1; j<tab.length; j++)
        if(tab[i]==tab[j])
            cptInt++;
            
    if((cptExt==cptInt)||(cptExt<cptInt)){
        if(cptExt<cptInt)
            doublons= [];
        doublons.push(tab[i])
        cptExt= cptInt;
    }
}

console.log(doublons);