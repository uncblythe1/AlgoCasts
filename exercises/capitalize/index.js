// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = str.split(' ');
    const newWords = [];

    for(let word of words) {
        let first = word[0].toUpperCase();
        newWords.push(first + word.slice(1));
    }
    
    return newWords.join(' ');
}

module.exports = capitalize;
