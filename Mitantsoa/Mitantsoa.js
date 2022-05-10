


function nombre(a,b){
        if (a == 10 || b == 10 || (a + b) == 10){
            return true;
        }
        return false;
    }
   // console.log(nombre(10,10));

// tableau
let table = [34,-27,76,100,-46,27,39,-50,27,32];
let somme = Array();

for(let i =0; i<table.length; i++){
    for(let j=0; j<somme.length; j++){
        if(somme[j] == table[i]){
            somme.push(table[i]);
        }
        break;
     }
}

//console.log(somme);
[...new Set(table)];

// rangement croissant
function croissant(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}
console.log("Par ordre croissant: "+croissant(table));

// rangement décroissant
function decroissant(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i > array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}
console.log("Par ordre décroissant: " +decroissant(table));

// repetition frequent
function repetition(array){
    let mf = 1;
    let m = 0;
    let item;
    for (let i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[i] == array[j])
                m++;
            if (mf < m) {
                mf = m;
                item = array[i];
            }
        }
        m = 0;
    }
    return item;
}
console.log("Ce qui se repete le plus: " +repetition(table));

function somme(array){
    let pos = 0;
    let neg = 0;
    for(let j=0; j<array.length; j++){
        if(array[j] < 0){
            neg += int(array[j]);
        }
        pos += int(array[j]);
    }
    return "Positif: "+pos+ " "+"Negatig: "+neg;
}
console.log(somme(table));