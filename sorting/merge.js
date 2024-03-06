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

function merge(arLeft, arRight){
    // if(arLeft && arRight){
        // console.log('arLeft', arLeft);
        // console.log('arRight', arRight);
        let i= 0
        let j = 0
        let aux = []
    
        while(i< arLeft.length && j<arRight.length){
            if(arLeft[i]<= arRight[j]){
                aux.push(arLeft[i])
                i++
                // console.log('push i', aux);
            }else{
                aux.push(arRight[j])
                j++
                // console.log('push j', aux);
            }
        }
    
        while(i < arLeft.length){
            aux.push(arLeft[i])
            i++
            // console.log('gather i', aux);
        }
        while(j < arRight.length){
            aux.push(arRight[j])
            j++
            // console.log('gather j', aux);
        }
        // console.log('aux', aux);
        return aux
    // }
}