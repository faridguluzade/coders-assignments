"use strict";

//#region  Bubble Sort

const bubbleSort = function (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
};

// console.log(bubbleSort([2, 1, 4, 6, -1, 8, -5, 10, 7]));

//#endregion

//-------------------------------------------

//#region Selection Sort

const selectionSort = function (array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }

    if (min != i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }

  return array;
};

// console.log(selectionSort([10, 2, 1, 4, 7, 2, 6, 8]));

//#endregion

//----------------------------------------------

//#region  Insertion Sort

const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = current;
  }

  return arr;
};

// console.log(insertionSort([9, 2, 12, 4, 7, 3, 8, 0, 5]));

//#endregion

//----------------------------------------------------

//#region Merge Sort

const merge = function (left, right) {
  const sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

const mergeSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

// console.log(mergeSort([3, 5, 8, 5, 99, 1, 9, 4]));

//#endregion

//-------------------------------------------------

//#region Quick Sort

const quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

// console.log(quickSort([7, 3, 5, 1, 2, 8]));

//#endregion

//---------------------------------------------------
