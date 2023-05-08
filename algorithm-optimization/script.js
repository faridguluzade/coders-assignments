"use strict";

//#region  1. Write a function that checks if a given number is prime. Optimize the loop to stop checking once the number is found to be divisible by any other number.

// First
const isPrime = function (num) {
  if (num <= 1) return false;

  if (num === 2) return true;

  if (num % 2 === 0) return false;
  console.log(Math.sqrt(num));

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// console.log(isPrime(37));

// Second
const isPrimeNumber = function (num) {
  if (num <= 1) return false;

  if (num === 2) return true;

  if (num % 2 === 0) return false;

  let isPrime = true;

  for (let i = 3; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

// console.log(isPrimeNumber(37));

//#endregion

//-----------------------------------------------------

//#region 2. Given a function that checks if a number is positive (isPositive), inline it within a function that returns the square of a positive number or zero for negative numbers.

// First
const isPositive = function (num) {
  return num > 0;
};

const squareIfPositive = function (num) {
  return isPositive(num) ? num ** 2 : 0;
};

// console.log(squareIfPositive(5));

// Second
const squareIfPositive2 = function (num) {
  return num > 0 ? num ** 2 : 0;
};

// console.log(squareIfPositive2(5));

//#endregion

// ------------------------------------------------

//#region  3. Write a function that finds the first non-repeated character in a string. Implement a check to skip further iterations once the non-repeated character is found.

const findFirstNonRepeatedChar = function (str) {
  if (!str.length) return "";

  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCount[char] === 1) {
      return char;
    }
  }

  return -1;
};

// console.log(findFirstNonRepeatedChar("faridfaid"));

//#endregion

//---------------------------------------------------------
