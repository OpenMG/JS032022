const a = 'Hello World';
console.log(a);

let b = 10;
let Racine_Carrée = Math.sqrt(b);
let Arrondi = Math.round(b);
console.log(Racine_Carrée);
console.log(Arrondi);

//Affichage Notes
let Notes = [7, 8, 13, 10, 9];
let Sommes;
for (let i = 0; i < Notes.length; i++)
{
    console.log(Notes[i]);
}

//Affichage Notes supérieur ou égale à 10 et Notes inférieur ou égale à 10
for (let i = 0; i < Notes.length; i++)
{
    if (Notes [i] >= 10)
     {
         console.log('Notes supérieur ou égale à 10 : ' + Notes [i]);
     }
     else 
     {
         console.log(`Notes inférieur ou égale à 10 : ${Notes[i]}`);
     }
}

