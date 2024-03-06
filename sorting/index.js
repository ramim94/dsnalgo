/**
* Swap the number b into the index a
* @param {Array} arr the array to perform the operation on
* @param {Number} a index to swap to
* @param {Number} b index to swap from
*/

module.exports= function swap(arr, a, b){
    const temp = arr[b]
    arr[b] = arr[a]
    arr[a] = temp
    return arr
}