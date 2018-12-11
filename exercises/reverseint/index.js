// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//---------------------------My work below:

//input: integer
//output: integer(reverse numbers)

//solution 1
// function reverseInt(n) {
//     const reversedStr = n
//          .toString()
//          .split('')
//          .reverse()
//          .join('');
//     const reversedNum = parseInt(reversedStr);
//     if(n >= 0) {
//         return reversedNum;
//     } else {
//         return -reversedNum;
//     }
// }

//solution 2
function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
