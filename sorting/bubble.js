const swap = require('./index')
module.exports = function bubbleSort(arr){
    console.log('input', arr);
    const arrLen = arr.length
    let sorted = arr

    for(let j=0; j< arrLen; j++){
        for(let i=arrLen; i> 0; i--){
            if(arr[i-1] > arr[i]){
                sorted= swap(arr, i, i-1)
            }
        }
    }
    

    console.log('sorted', sorted);
}