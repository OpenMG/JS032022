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



/**
 * Sum of positive and negative numbers in an array
 * in: [12, -3, -4, 0, 1]
 * out:
 *   * negatives: -7
 *   * positives: 13
 * @param {[]} array 
 */
function sumPN(array) {
    let sumP = 0, sumN = 0;
    array.forEach(number => number > 0 ? sumP += number : sumN += number);
    console.log(`
        in: ${array}
        out:
            * negatives: ${sumN}
            * positives: ${sumP}`);
}
const sumArray = [12, -3, -4, 0, 1];
console.log('Sum method:');
sumPN(sumArray);

console.log('\n');


/**
 * The most number repeated in an array
 * 
 * in: [23, 23, 23, 3, 4, 5, 5, 5, 1, 0, 3]
 * out: 23, 5
 * @param {[]} array 
 */
function mostRepeated(array) {
    // Group the same number in the sub array of container
    // [ [23, 23, 23], [3, 3], [4], [5, 5, 5], [1], [0] ]
    const arrayContainer = [[]];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let elementIsCheckedInSubArray = false;
        for (const subArray of arrayContainer) {
            elementIsCheckedInSubArray = subArray.includes(element);
            if (elementIsCheckedInSubArray) {
                subArray.push(element);
                elementIsCheckedInSubArray = true;
                break;
            }
        }
        !elementIsCheckedInSubArray && arrayContainer.push([element]);
    }
    // filter the sub array that has the max length
    let maxLength = 0;
    arrayContainer.forEach(sub => sub.length > maxLength ? maxLength = sub.length : undefined);
    const mostRepeatedNumber = 
        arrayContainer
            .filter(sub => sub.length === maxLength)  // => [ [23, 23, 23], [5, 5, 5] ]
            .map(mostRepeated => [...new Set(mostRepeated)]) // => [ [23], [5] ]
            .flat(); // merge sub-arrays to form one => [23, 5]

    console.log('in: ', array);
    console.log('out: ', mostRepeatedNumber.join(', '));
}

console.log('Most number repeated method:');
mostRepeated([23, 23, 23, 3, 4, 5, 5, 5, 1, 0, 3]);

console.log('\n');


/**
 * The greatest number of combinations of an array of numbers
 * in: [2, 2, 0, 5]
 * out: 5220
 * 
 * in: [1, 3, 6]
 * out: 631
 * 
 * @param {[]} array 
 */
function maxCombinaison(array) {
    return +array
        .sort((a, b) => b-a)
        .join('');
}

console.log('Most combination method:');
console.log('in: ', [2, 2, 0, 5]);
console.log('out: ', maxCombinaison([2, 2, 0, 5]));


console.log('in: ', [1, 3, 6]);
console.log('out: ', maxCombinaison([1, 3, 6]));