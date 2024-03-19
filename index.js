const selectionSort = require('./sorting/selection')
const bubbleSort = require('./sorting/bubble')
const insertionSort = require('./sorting/insertion');
const mergeSort = require('./sorting/merge');
const quickSort = require('./sorting/quick');
const heapsort = require('./sorting/heapsort');
// arr[] = [64, 25, 12, 22, 11]

let array = [6, 4, 3, 8, 1, 5, 2, 7]
// let array = [3, 5, 1, 4, 2]
// let array = [6, 4]

// console.log('----selection sort----');
// selectionSort(array)
// console.log('----selection sort end----');

// console.log('----bubble sort----');
// bubbleSort(array)
// console.log('----bubble sort end----');

// console.log('----Insertion sort----');
// insertionSort(array)
// console.log('----Insertion sort end----');

// console.log('----Merge sort----');
// mergeSort(array)
// console.log('----Merge sort end----');

// console.log('----Quick sort----');
// quickSort(array)
// console.log('----Quick sort end----');

console.log('----Heap sort----');
heapsort(array)
console.log('----Heap sort end----');