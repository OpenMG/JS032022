let c= [34,34,-27,76,100,-46,27,39,-50,27,32]

function ManalaDoublon(table, signe=true){
    let d=[]
    let bool=null
    for (let i = 0; i < c.length; i++) {
            bool=false
            for (let index=0; index<d.length; index++) {
                if (signe) {
                    if(Math.abs(d[index])=== Math.abs(c[i])){
                        bool=true
                    }
                } else {
                    if(d[index]=== c[i]){
                        bool=true
                    }
                }
            }
            if(!bool){
            d.push(c[i])
        }
    }
    return d
}

function somme(table,){
    let neg=0
    let pos=0
    for (let i = 0; i < table.length; i++) {
        if (table[i]<0) {
            neg=neg+table[i]
        } else {
            pos= pos+ table[i]
        }
    }   
    return [neg, pos]
}

console.table(ManalaDoublon(c,false))

e=[23, 23, 23, 3, 4, 5, 5, 5, 1, 0, 3]

function occurence(table) {
    let temp= ManalaDoublon(table,false)
    let occurence=[ ]
    for (let i = 0; i < temp.length; i++) {
        
    }
}
