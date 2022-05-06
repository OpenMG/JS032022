const a = 'Hello World';
console.log(a);

let b = 10.5;
let Racine_Carrée = Math.sqrt(b);
let Arrondi = Math.round(b);
console.log(Racine_Carrée);
console.log(Arrondi);

//Affichage Notes
let Notes = [7, 8, 13, 10, 9];
let Somme = 0;
for (let i = 0; i < Notes.length; i++)
{
    console.log(Notes[i]);
}

//Affichage Notes supérieur ou égale à 10 et Notes inférieur à 10
for (let i = 0; i < Notes.length; i++)
{
    if (Notes [i] >= 10)
     {
         console.log('Notes supérieur ou égale à 10 : ' + Notes [i]);
     }
     else 
     {
         console.log(`Notes inférieur à 10: ${Notes[i]}`);
     }
}

//Moyenne
for (let i = 0; i < Notes.length; i++)
{
    Somme += Notes [i];
}

let Moyenne = Somme/Notes.length;
console.log('Moyenne : ' + Moyenne);

// Notes par Ordre Croissant
function Ordre_Croissant()
{
    Notes.sort(function(a, b)
    {
        return a - b
    }
    )
    console.log('Notes par Ordre Croissant : ' + Notes)
}
Ordre_Croissant()

//Notes par Ordre Décroissant
console.log('Notes par Ordre Décroissant : ' + Notes.reverse());

// Position milieu du côté gauche
let Notes1 = [9, 15, 12, 7];
let Position = Math.round(Notes1.length/2);
console.log('Position du milieu : ' + [Position - 1]);
console.log('Notes du position du milieu : ' + Notes1[Position - 1]);

// Position milieu du côté droite
console.log('Position du milieu : ' + [Position]);
console.log('Notes du position du milieu : ' + Notes1[Position]);