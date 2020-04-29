'use strict';

function findPalindrome(number) {
    const opposite = +number
        .toString()
        .split('')
        .reverse()
        .join('');
    return number === opposite ?
        number
        : findPalindrome(number + opposite);
}

/*eslint-disable*/
console.log(`palindrome of 121 is ${findPalindrome(121)}`);
console.log(`palindrome of 312 is ${findPalindrome(312)}`);
console.log(`OMG WTF palindrome of 196 is ${findPalindrome(196)}`);