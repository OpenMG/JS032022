const a = 'Hello World';
console.log(a);

let b = 10.5;
let Racine_Carrée = Math.sqrt(b);
let Arrondi = Math.round(b);
console.log(Racine_Carrée);
console.log(Arrondi);

//Affichage Notes
let Notes = [ 8, 13, 15, 9];
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

// Position du milieu côté gauche
let Position = Math.round(Notes.length/2);
console.log('Position du milieu côté gauche: ' + [Position - 1]);
console.log('Notes position du milieu côté gauche: ' + Notes[Position - 1]);

// Position du milieu côté droite
console.log('Position du milieu côté droite: ' + [Position]);
console.log('Notes position du milieu côté droite: ' + Notes[Position]);

// Notes milieu min max
if (Notes.length % 2 == 0)
{
    Min = Notes [Position];
    Max = Notes [Position + 1];
    console.log('Min : ' + Min + ' et Max : ' + Max)
}
else
{
    console.log('Notes milieu est : ' + Notes[Position - 1]);
}

let Notes1 = [7, 5, 12, 9, 15];
if (Notes1.length % 2 == 0)
{
    Min = Notes1 [Position];
    Max = Notes1 [Position + 1];
    console.log('Min : ' + Min + ' et Max : ' + Max)
}
else
{
    console.log('Notes milieu est : ' + Notes1[Position]);
}