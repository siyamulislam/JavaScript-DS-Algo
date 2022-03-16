let nArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
let target = 37;

const index =linearSearch(nArray, target);
console.log('index: '+ index);

function linearSearch(nArray, target) {
    for (let i = 0; i < nArray.length; i++) {
        const element = nArray[i];
        if (element == target) {
            console.log('item Found');
            return i;
        }
    }
    console.log('item not Found');
    return -1;
}

