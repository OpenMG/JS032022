let c= [34,34,-27,76,100,-46,27,39,-50,27,32]
 /**
  * 1. Manala doublons anaty tableau ana nombre 
  * @param {Array} table 
  * @param {boolean} signe 
  * @returns Un tableau sans doublons
  */
function ManalaDoublon(table, signe=true){
    let d=[]
    let bool=null
    for (let i = 0; i < table.length; i++) {
            bool=false
            for (let index=0; index<d.length; index++) {
                if (signe) {
                    if(Math.abs(d[index])=== Math.abs(table[i])){
                        bool=true
                    }
                } else {
                    if(d[index]=== table[i]){
                        bool=true
                    }
                }
            }
            if(!bool){
            d.push(table[i])
        }
    }
    return d
}
/**
 * 2. Mandahatra element anaty tableau ana nombre par ordre croissant (raha misy doublons dia igniorena) avy eo decroissant
 * @param {Array} table 
 */
 function ArraySort(table) {
    let temp=[]
    table= ManalaDoublon(table,false)
    for (let i = 0; i < table.length; i++) {
        for (let j = i; j < table.length; j++) {
        if (table[i]>table[j]) {
            temp[0]=table[i]
            temp[1]=table[j]
            table[i]=temp[1]
            table[j]=temp[0]
        }           
    }     
}
    console.log("Croissant : "+table)
    console.log("Decroissant : "+table.reverse())
    
}

/**
 * 3. Total ny nombre negative sy positive anaty tableau ana nombre
 * @param {array} table 
 * @returns Somme des nombres positives et négatives
 */
function somme(table){
    let neg=0
    let pos=0
    for (let i = 0; i < table.length; i++) {
        if (table[i]<0) {
            neg=neg+table[i]
        } else {
            pos= pos+ table[i]
        }
    }   
    onsole.log("Negatives: "+neg)
    console.log("Positives: "+pos)
    return [neg, pos]
}


/**
 * 4. Nombre miverina in-betsaka indrindra anaty tableau (raha misy mitovy dia aseo daholo)
 * @param {Array} tb 
 */
function occurence(tb) {
    let temp= ManalaDoublon(tb,false)
    let occurence=[ ]
    let result=[]

    for (let i = 0; i < temp.length; i++) {
        occurence[temp[i]]=0
        for (let ind = 0; ind < tb.length; ind++) {
            if(temp[i]===tb[ind]){
                occurence[temp[i]]++
            }
        }
    }

    for (let i = 0; i < occurence.length; i++) {
        if (occurence[i]===undefined) {
            occurence[i]=0
        }   
    }

    let max=Math.max(...occurence)
    for (let i = 0; i < occurence.length; i++) {
        if(occurence[i]===max){
            result.push(i)
        }
        
    }   return result
}
let y=occurence(e)
console.log(y)
//
/**
 * 
5. Combinaison ana nombre lehibe indrindra anaty tableau (positive daholo ny nombre anaty tableau)
 * @param {array} table 
 */
function combinaison(table) {
    for (let i = 0; i < table.length; i++) {
        if(table[i]<0){
            console.log("Verifier votre entré")
            return
        }
    }
    let result= table.sort().reverse()
    let chiffre= ""
    for (let i = 0; i < result.length; i++) {
        chiffre=chiffre+result[i]
        
    }
    return chiffre
}