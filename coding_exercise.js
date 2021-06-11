//Given 2 arrays, create a function that lets a suer know (true/false) whether these two arrays contain any common items
//For Example: 
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false

//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];

// function containsCommonItem(arr1, arr2) {
//     for (let i=0; i < arr1.length; i++) {
//         for (let j=0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false
// }

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// function containsCommonItem2(arr1, arr2) {
//     let map = {};
//     for (let i=0; i < arr1.length; i++) {
//         if(!map[array1[i]]) {
//             const item = array1[i]
//             map[item] = true;
//         }
//     }
//     for (let j=0; j < arr2.length; j++) {
//         if (map[array2[j]]) {
//             return true;
//         }
//     }
//     return false
// }


// console.log(containsCommonItem2(array1, array2))

// function containsCommonItem3(arr1, arr2) {
//     return arr1.some(item => arr2.includes(item))
// }

//  console.log(containsCommonItem3(array1, array2))

listOfString = ['daggie', 'zeke', 'manu', 'kentdrick']

function stringCounter(arr) {
    let largestString = '';
    for (let i=0; i<arr.length; i++) {
        if (arr[i].length > largestString.length) {
            largestString = arr[i];
        }
    }
    return largestString
}

console.log(stringCounter(listOfString))