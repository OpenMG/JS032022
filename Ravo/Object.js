
let z = {"Nom" : "E", "Prénom" : "R","Sexe": "M", "age" : 1};
console.log(z["Nom"] + ' ' + z.Prénom);

//Table  
let tab = [{Nom : "ti", Scientifique : 10.5, Literaire : 12},
{Nom : "yu", Scientifique : 7.5, Literaire : 8.5},
{Nom : "ay", Scientifique : 13, Literaire :13.5},
{Nom : "ge", Scientifique : 8, Literaire : 15},
{Nom : "na", Scientifique : "null", Literaire : 7}];
console.log(tab);

//Moyenne
let s = 0;
let m = 0;
let Tmo = 0;
for (let i = 0; i < tab.length; i++)
{
  if (tab[i].Scientifique == null || tab[i].Literaire == null)
  {
    continue;
  }
   else    
    {
      s += (tab[i].Scientifique, tab[i].Literaire);
      m = s/2;
      
    
    }
  
}

console.log(m);
