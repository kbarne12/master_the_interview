const nemo = ['nemo'];

function findNemo(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'nemo') {
            console.log('Found NEMO!')
        }
    }
}

findNemo(nemo)

function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console.log(boxes);
    })
}

const boxes = [1, 2, 3, 4, 5]
function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

// Good Code is: 
// 1. Readable
// 2. Scalable