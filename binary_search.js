
let nArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
const target = 17;
const index = binarySearch(nArray, target)
console.log('index: '+index)


function binarySearch(nArray, target) {
    let start = 0;
    let end = nArray.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nArray[mid] === target) {
            console.log('item found at position', mid +' value= '+nArray[mid]);
            return mid;
        }
        if (nArray[mid] < target) {
            start = mid + 1;
        }
        if (nArray[mid] > target) {
            end = mid - 1;
        }
    }
    
    console.log('item not Found');
    return -1;
}