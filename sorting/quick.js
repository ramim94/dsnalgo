const {swap, merge} = require('./index')

module.exports = function quickSort(arr){
    console.log('input', arr);
    const sorted = helper(arr)
    console.log('sorted', sorted);
}

function helper(unsortedArray){

    if(unsortedArray.length<2){
        return unsortedArray
    }

    let pivot = unsortedArray[0]
    let arrLeft = []
    let arrRight = []

    for(let i=1; i< unsortedArray.length; i++){
        if(unsortedArray[i]<=pivot){
            arrLeft.push(unsortedArray[i])
        }else{
            arrRight.push(unsortedArray[i])
        }
    }

    let leftSort = helper(arrLeft)
    let rightSort = helper(arrRight)

    return [...leftSort, pivot, ...rightSort]
}
