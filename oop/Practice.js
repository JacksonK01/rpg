let array = createRandomArray();

console.log("Before: " + array);

sort(array);

console.log("After: " + array);

function sort(array) {
    let n = array.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(array[i] < array[j]) {
                let toSwap = array[i];

                array[i] = array[j];
                array[j] = toSwap;
            }
        }
    }
}

function createRandomArray() {
    const n = getRndInteger(0, 200)

    const array = new Array(n);

    for(let i = 0; i < n; i++) {
        array[i] = getRndInteger(0, 100);
    }

    return array;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}