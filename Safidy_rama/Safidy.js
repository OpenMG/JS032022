function nb(n,m){
    if(n == 10 || m == 10 || (n + m ) == 10){
        return true;
    }
    
        return false
    
}
//console.log(nb(10,10));
//tableau
let nombre =[10,true,3,5,6];
let a = [...nombre];
a[3] = 'coco';
nombre[3] = 'chris';
for(let i=0; i<5; i++){
 //console.log(nombre[i]);
 
}
//console.log(nombre);
//console.log(a);
let nbr = [34,-27,76,100,-46,27,39,-50,27,32]
//nbr.length
//nbr.push(créer tableau)
//console.log(nbr.length);
let result =Array();
for(let i =0; i<nbr.length; i++){
if(!result.includes(nbr[i])){
    result.push(nbr[i]);
}
}
[...new Set(nbr)];
//console.log(result);


function croissante(array){
    var d = false;
    while(!d){
        d = true;
        for (let i = 1; i < array.length;i ++){
            if (array[i - 1] > array[i]){
                d = false;
                var temp = array[i -1];
                array[i - 1] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}
console.log(croissante(nbr));

function decroissante(array){
    var d = false;
    while(!d){
        d = true;
        for (let i = 1; i < array.length;i ++){
            if (array[i - 1] < array[i]){
                d = false;
                var temp = array[i -1];
                array[i - 1] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}
console.log(decroissante(nbr));