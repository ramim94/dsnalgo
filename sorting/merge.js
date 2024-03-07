const {merge} = require('./index')

module.exports = function mergeSort(arr){
    console.log('input', arr);
    const sorted = helper(arr)
    console.log('sorted', sorted);
}

function helper(unsortedArray){
    // console.log('usArrLen', unsortedArray.length);
    if (unsortedArray.length< 2){
        return unsortedArray
    }

    const mid = Math.floor( unsortedArray.length / 2) 

    
    const al= helper(unsortedArray.slice(0, mid))
    const ar= helper(unsortedArray.slice(mid))

    // merging
    return merge(al, ar)
}