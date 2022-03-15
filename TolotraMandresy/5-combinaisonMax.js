let tab=[2, 2, 0, 5];

for(let i=0; i<tab.length; i++){
    for(let j=i+1; j<tab.length; j++)
        if(tab[j]>tab[i]){
            tab[i]+=tab[j];
            tab[j]= tab[i]-tab[j];
            tab[i]= tab[i]-tab[j];
        }
}

console.log(tab);
console.log("La combinaison max est: " + tab.join(""));