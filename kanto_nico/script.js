let c= [34,34,-27,76,100,-46,27,39,-50,27,32]

function ManalaDoublon(table){
    let d=[]
    let bool=null
    for (let i = 0; i < c.length; i++) {
            bool=false
            for (let index=0; index<d.length; index++) {
                if(Math.abs(d[index])=== Math.abs(c[i])){
                    bool=true
                }
            }
            if(!bool){
            d.push(c[i])
        }
    }
    return d
}
