const selectionSort = require('./sorting/selection')
const bubbleSort = require('./sorting/bubble')
const insertionSort = require('./sorting/insertion');
const mergeSort = require('./sorting/merge');
// arr[] = [64, 25, 12, 22, 11]

// let array = [6, 4, 3, 8, 1, 5, 2, 7]
let array = [6, 4, 3, 8, 1, 5, 2, 7]

// console.log('----selection sort----');
// selectionSort(array)
// console.log('----selection sort end----');

// console.log('----bubble sort----');
// bubbleSort(array)
// console.log('----bubble sort end----');

// console.log('----Insertion sort----');
// insertionSort(array)
// console.log('----Insertion sort end----');

console.log('----Merge sort----');
mergeSort(array)
console.log('----Merge sort end----');