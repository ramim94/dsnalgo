module.exports = function insertionSort(arr){
    console.log('input', arr);
    
    for(let j= 0; j<arr.length; j++ ){
        const checkItem = j
        const temp = arr[checkItem]

        let iter = checkItem - 1
        while(iter >= 0 && arr[iter]> temp){
            arr[iter+1] = arr[iter]
            iter--
        }
    
        arr[iter+1] = temp
    }

    console.log('sorted', arr)
}