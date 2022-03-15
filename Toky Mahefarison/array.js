/**
 * Remove duplicate in an array
 * > in [23, 0, -23, 1, 5, 0]  
 * > out [23, 0, -23, 1, 5]
 * 
 * @param {[]} array 
 */
function removeDuplicates(array) {
    // return [...new Set(array)];
    // return array.filter( (item, index) => array.indexOf(item) === index );

    const unique = [];
    for (const item of array) {
        // if the unique tab is still empty, push the item
        if (unique.length === 0) {
            unique.push(item);
        } else {
            let isExist = false;
            // check if the item exist in unique
            for (const exist of unique) {
                isItemExist = item === exist;
                // exit the unique's loop if the item exists, otherwise continue the iteration
                if (isItemExist) {
                    break;
                }
            }
            // push the item if it doesn't match in the unique
            !isItemExist && unique.push(item);
        }
    }
    return unique;
}

console.log('\n');

const input = [23, 0, -23, 1, 5, 0];
console.log('Remove duplicates method:');
console.log('> in ', input);
console.log('> out', removeDuplicates(input));

console.log('\n');



/**
 * Sort the elements of an array in ascending and descending order
 * in [23, 0, -23, 1, 5, 0]  
 * out: [-23, 0, 1, 5, 23] (croissant)
 * out: [23, 5, 1, 0, -23] (decroissant)
 * @param {[]} array 
 */
function sort(array) {
    // console.log('out: ' + [...new Set(array.sort((current, next) => current - next))] + ' (ascending)');
    // console.log('out: ' + [...new Set(array.sort((current, next) => next - current))] + ' (descending)');

    const asc = Array.from(array);
    const dsc = [...array];
    for (let index = 0; index < array.length; index++) {
        for (let current = 0; current < index; current++) {
            if (asc[current] > asc[index]) {
                const temp = asc[current];
                asc[current] = asc[index];
                asc[index] = temp;
            }

            if (dsc[current] < dsc[index]) {
                const temp = dsc[current];
                dsc[current] = dsc[index];
                dsc[index] = temp;
            }
        }
    }
    console.log('out: ' + removeDuplicates(asc) + ' (ascending)');
    console.log('out: ' + removeDuplicates(dsc) + ' (descending)');
}


console.log('Sort ascending/descending method:');
console.log('in ', input);
sort(input);

console.log('\n');