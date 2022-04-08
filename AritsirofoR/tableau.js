let newtab = [23, 0, -23, 1, 5, 0];

// elimination des doublons

console.log("1. Elimination des doublons : ")

let sansdoublons = [];

for(let i=0; i<newtab.length; i++)
{
    if(sansdoublons.includes(newtab[i]))
    {
    } else {
        sansdoublons.push(newtab[i]);
    } 
}
console.log(sansdoublons)


// tri croissant

console.log("2. Tri croissant : ")

function tri(elt) 
{
    let length = elt.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < (length - i - 1); j++) 
        {
            if(elt[j] > elt[j+1]) 
            {
                let affectation = elt[j];
                elt[j] = elt[j+1];
                elt[j+1] = affectation;
            }   
        }
    }
}

let arr = sansdoublons;
tri(arr); 
console.table(arr);

// Calcul Negatif et Positif

console.log("3. Calcul Negatif et Positif")

let pos = 0;
let neg = 0;
for (let i = 0; i < newtab.length; i++) {
    if (newtab[i] < 0) 
    {
        pos = pos + newtab[i];
    } else {
        neg = neg + newtab[i];
    }
}

console.log("La somme des nombres positifs est : ", pos);
console.log("La somme des nombres negatifs est : ", neg);

// Combinaison

let tab1=[2, 2, 0, 5];

for(let i=0; i<tab1.length; i++)
{
    for(let j=i+1; j<tab1.length; j++)
    {
        if(tab1[j]>tab1[i]){
            tab1[i] += tab1[j];
            tab1[j] = tab1[i]-tab1[j];
            tab1[i] = tab1[i]-tab1[j];
        }
    }
}

console.log("La combinaison : " + tab1);

// Ny sasany tsy mbola vita :)