// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//-------------------------------------My work below:

//input: string 
//output: string( characters reversed )

//1st solution
// function reverse(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }

//2nd solution
function reverse(str) {
    let reversed = '';
    for(let i of str) {
        reversed = i + reversed;
    }
    return reversed;
}

//3rd solution
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }



module.exports = reverse;
