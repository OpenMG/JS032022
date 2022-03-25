// Exo 1 :Manala doublons anaty tableau ana nombre
// > in [23, 0, -23, 1, 5, 0]  
// > out [23, 0, -23, 1, 5]  

console.log(exercice_1([23, 0, -23, 1, 5, 0]));
console.log(exercice_2([23, 0, -23, 1, 5, 0]))
console.log(exercice_3([12, -3, -4, 0, 1]))

function exercice_1(tab_1 = []){
    let tab_2 = [];
    for (let i = 0; i < tab_1.length ; i++){
        let verifDouble = false;
        for(let j=0 ; j < tab_2.length ; j++){
            if(tab_1[i] == tab_2[j]){
                verifDouble = true;
            }
        }
         if(verifDouble == false){
             tab_2.push(tab_1[i])
         }
    }
    
    return tab_2;
}


// Exo 2 Mandahatra element anaty tableau ana nombre par ordre croissant 
// (raha misy doublons dia igniorena) avy eo decroissant
function exercice_2(tableau = []){
    let array = exercice_1(tableau);
    for (let i = 0; i < array.length; i++) {
        for (let j  = 1 ; j <= array.length ; j ++){
            if(array[i] < array[j]){
                let temp = array[i]
                array[i]   = array[j]
                array[j] = temp 
            }
        }
    }

    return array;
}

// Total ny nombre negative sy positive anaty tableau ana nombre
// in: [12, -3, -4, 0, 1]
// out:
//     * negatives: -7
//     * positives: 13
function exercice_3(tableau = []){
    let positive = 0;
    let negative = 0;
    for(let i =0 ; i < tableau.length ;i++){
        if(tableau[i] < 0){
            negative += tableau[i]
        }else{
            positive += tableau[i]
        }
    }

    return "positive :" + positive + "\nnegative: " + negative; 
}

// Nombre miverina in-betsaka indrindra anaty tableau (raha misy mitovy dia aseo daholo)
// in: [23, 23, 23, 3, 4, 5, 5, 5, 1, 0, 3]
// out: 23, 5
function exercice_4(tableau){
    //mbola ts nataoko fa mbola sairana kel fa alefako iany ref vita
}


// Combinaison ana nombre lehibe indrindra anaty tableau (positive daholo ny nombre anaty tableau)
// in: [2, 2, 0, 5]
// out: 5220
function exercice_5(){
    //mbola ts nataoko fa mbola sairana kel fa alefako iany ref vita
}

