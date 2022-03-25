let arr1 = [23, 0, -23, 1, 5, 0]
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
const newArr = removeDoublons(arr1)
console.log(newArr)


// 2 - Mandahatra element anaty tableau ana nombre par ordre croissant (raha misy doublons dia igniorena) avy eo decroissant
function trie(arr, order = 'asc') {
  let arr2 = removeDoublons(arr) // 🤣
  for (i = 0; i < arr2.length; i++) {
    for (n = 0; n < i; n++) {
      if (order == 'dsc') {
        if (arr2[n] < arr2[i]) {
          temp = arr2[i]
          arr2[i] = arr2[n]
          arr2[n] = temp
        }
      } else if (order == 'asc') {
        if (arr2[n] > arr2[i]) {
          temp = arr2[i]
          arr2[i] = arr2[n]
          arr2[n] = temp
        }
      }
    }
  }
  return arr2
}
const arrSort = trie(arr1, 'dsc')


// 3 - Total ny nombre negative sy positive anaty tableau ana nombre
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
let array = [23, 23, 23, 23, 3, 4, 5, 5, 5, 1, 0]
function occure(arr) {
  let tab = []
  for (i = 0; i < arr.length; i++) {
    for (j = 1; j < i; j++) {
      if (arr[i] !== arr[j]) {
        continue
      } else {
        tab.push(arr[i])
      }
    }
  }
  return tab
}
const arr = occure(array)
console.log(arr)


// 5 - Combinaison ana nombre lehibe indrindra anaty tableau (positive daholo ny nombre anaty tableau)
let arr5 = [2, 2, 0, 5]
function combin(arr) {
  for (i = 0; i < arr.length; i++) {
    for (n = 0; n < i; n++) {
      if (arr[n] < arr[i]) {
        temp = arr[i]
        arr[i] = arr[n]
        arr[n] = temp
      }
    }
  }
  console.log(arr.join(''))
}
combin(arr5)