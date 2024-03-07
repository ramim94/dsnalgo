const {swap, merge} = require('./index')

module.exports = function quickSort(arr){
    console.log('input', arr);
    const sorted = helper(arr)
    console.log('sorted', sorted);
}

function helper(unsortedArray){
    let pivotIndex = 0
    let small = pivotIndex

    // exit clause
    if(unsortedArray.length< 2){
        return unsortedArray
    }

    // partition start
    for(let big = 1; big < unsortedArray.length; big++){
        if(unsortedArray[big]< unsortedArray[pivotIndex]){
            small++
            unsortedArray= swap(unsortedArray, big, small)
        }

    }

    // at this point all smalls are at start+1 to big
    // swap pivot and small
    // console.log('partitionedArr', unsortedArray);
    unsortedArray = swap(unsortedArray, pivotIndex, small)
    
    // partition end    
    // console.log('partitionedArr', unsortedArray);
    console.log('len', unsortedArray.length);
    console.log('small', small);

    // divide
    subArrLeft = (unsortedArray.slice(0,small-1)) 
    subArrRight = (unsortedArray.slice(small+1))
    
    console.log('subLeft', subArrLeft);
    console.log('subRight', subArrRight);
    // const merged=  merge(subArrLeft, subArrRight)
    // console.log('m', merged);
}
