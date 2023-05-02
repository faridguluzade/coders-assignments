"use strict";

//#region Linear Search

const linearSearch = function (array, key) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) return i;
  }
  return -1;
};

// console.log(linearSearch([4, 2, 1, 5], 5));

//#endregion

//------------------------------------

//#region BinarySearch

const binarySeacrh = function (array, key) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === key) return middle;

    if (key > array[middle]) {
      start = middle + 1;
    }

    if (key < array[middle]) {
      end = middle - 1;
    }
  }

  return -1;
};

// console.log(binarySeacrh([2, 4, 5, 6, 7, 8, 9, 10, 11], 2));

//#endregion

//-------------------------------------------
