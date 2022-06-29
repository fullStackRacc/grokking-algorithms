function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (arr[middle] === key) {
            //return item
            return middle;
        } else if (arr[middle] < key) {
            //key is on right
            start = middle + 1;
        } else {
            //key is on left
            end = middle - 1;
        }
    }
    //key not found :(
    return -1;
}
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
arr2 = [12, 23, 34, 56, 67, 87, 90]

console.log(binarySearch(arr1, 1))
console.log(binarySearch(arr1, 7))
console.log(binarySearch(arr2, 23))
console.log(binarySearch(arr2, 87))