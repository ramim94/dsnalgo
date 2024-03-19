/**
 * NOTE:
 * left child : (2 * i) +1
 * right child : (2 * i) +2
 * parent: floor( (index-1) / 2)
 */
module.exports = function heapsort(arr) {
    // building heap
    console.log('in', arr);
    let heap = createHeap(arr)
    const sorted = []
    while(heap.length>0){
        sorted.unshift(heap.shift())
        heap = createHeap(heap)
    }
    console.log('out', sorted);
}

function createHeap(arr){
    let arrLen = arr.length
    for(let i=Math.floor(arrLen/2); i>=0  ; i-- ){
        heapify(arr, arrLen, i)
    }
    return arr
}


function heapify(arr, arrLen, nodeIdx){
    let largest = nodeIdx
    let left = (2*nodeIdx) +1
    let right = (2*nodeIdx) +2

    if(left < arrLen && arr[left] > arr[largest] ) largest = left
    if(right< arrLen && arr[right]> arr[largest] ) largest = right

    if( nodeIdx!== largest){
        let swap = arr[nodeIdx]
        arr[nodeIdx] = arr[largest]
        arr[largest]= swap
        heapify(arr, arrLen, largest)
    }
}