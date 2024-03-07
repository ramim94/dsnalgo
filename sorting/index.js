/**
* Swap the number b into the index a
* @param {Array} arr the array to perform the operation on
* @param {Number} a index to swap to
* @param {Number} b index to swap from
*/
exports.swap= (arr, a, b) => {
        const temp = arr[b]
        arr[b] = arr[a]
        arr[a] = temp
        return arr
    }
    
exports.merge= (arLeft, arRight) => {
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
