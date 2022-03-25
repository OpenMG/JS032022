


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


function bubbleSort(array) {
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
console.log(bubbleSort(table));



function mostFrequent(arr, n) {

    // Sort the array
    arr.sort();

    // find the max frequency using linear
    // traversal
    let max_count = 1, res = arr[0];
    let curr_count = 1;

    for (let i = 1; i < n; i++) {
        if (arr[i] == arr[i - 1])
            curr_count++;
        else {
            if (curr_count > max_count) {
                max_count = curr_count;
                res = arr[i - 1];
            }
            curr_count = 1;
        }
    }

    // If last element is most frequent
    if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[n - 1];
    }
    return res;
}
