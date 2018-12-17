// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//solution 1
// function anagrams(stringA, stringB) {

//     const charMapA = buildCharMap(stringA);
//     const charMapB = buildCharMap(stringB);

//     if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false;
//     } 

//     for (let char in charMapA) {
//         if(charMapA[char] !== charMapB[char]) {
//             return false;
//         }
//     }

//     return true;

// }

// const buildCharMap = (str) => {
//     let charsMap = {};
//     for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charsMap[char] = charsMap[char]++ || 1;
//     }
//     return charsMap;
// };

//solution 2
function anagrams(stringA, stringB) {
    newA = cleanString(stringA);
    newB = cleanString(stringB);
    return newA === newB;
}

const cleanString = (s) => {
    return s.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
