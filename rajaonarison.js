let firstArray = [23, 0, -23, 1, 5, 0]

// 1 - Manala doublons anaty tableau ana nombre
function removeDoublons(array) {
  let newArr = []
  for (i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) === -1) {
      newArr.push(array[i])
    }
  }
  return newArr
}

const newArr = removeDoublons(firstArray)
console.log(newArr) // [23, 0, -23, 1, 5]

// 2 - Mandahatra element anaty tableau ana nombre par ordre croissant (raha misy doublons dia igniorena) avy eo decroissant
function trie(arr){
  let array = removeDoublons(arr) // 🤣
  for (i = 0; i < array.length; i++) {
    for (n = 0; n < i; n++) {
      if (array[n] > array[i]) { // iversena ny operateur de comparaison mba hazahoana ordre inverse
        temp = array[i]
        array[i] = array[n]
        array[n] = temp
      }
    }
  }
  return array
}
const arrSort = trie(firstArray)
console.log(arrSort)

// // 3 - Total ny nombre negative sy positive anaty tableau ana nombre
let sumP = 0
let sumN = 0
function sum(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sumP += array[i]
    } else if (array[i] < 0) {
      sumN += array[i]
    }
  }
  console.log(sumP, sumN);
}
sum([12, -3, -4, 0, 1])

// 4 - Nombre miverina in-betsaka indrindra anaty tableau (raha misy mitovy dia aseo daholo)


// 5 - Combinaison ana nombre lehibe indrindra anaty tableau (positive daholo ny nombre anaty tableau)
