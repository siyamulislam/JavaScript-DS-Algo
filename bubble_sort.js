let nArray = [22, 19, 3, 47, 29, 11, 59, 31, 23, 37, 17, 7, 53, 1, 13, 5];

const sorted = bubbleSort(nArray);
console.log(sorted + ' string');
console.log(sorted);


function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

