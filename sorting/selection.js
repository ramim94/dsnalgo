const swap = require('./index')
/**
 * try removing minvalue
 */
module.exports = function selectionSort(array){
    console.log(`input: `, array);
    const arrayLen = array.length
    for(let j=0; j<arrayLen-2; j++){
        let minValue = array[j]
        let minIdx = j
        for(let i=j+1; i<arrayLen; i++) {
            if(array[i]< minValue){
                minValue = array[i]
                minIdx = i
            }
        }
        array = swap(array,j,minIdx)
        // console.log(`${j} pass`, array);
    }
    console.log(`sorted: `, array);
}