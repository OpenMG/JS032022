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

const input = [23, 0, -23, 1, 5, 0];
console.log('Remove duplicates method:');
console.log('> in ', input);
console.log('> out', removeDuplicates(input));

console.log('\n');