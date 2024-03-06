const selectionSort = require('./sorting/selection')
const bubbleSort = require('./sorting/bubble')
const insertionSort = require('./sorting/insertion')
// arr[] = [64, 25, 12, 22, 11]

let array = [64, 25, 12, 22, 11]

// console.log('----selection sort----');
// selectionSort(array)
// console.log('----selection sort end----');

// console.log('----bubble sort----');
// bubbleSort(array)
// console.log('----bubble sort end----');

console.log('----Insertion sort----');
insertionSort(array)
console.log('----Insertion sort end----');