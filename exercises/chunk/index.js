// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//--------------------------------------------------My code below:

//input: array and size 
//output: subarray(s) of size specified

//solution 1
// function chunk(array, size) {
//     let chunkArray = [];
//     for(i = 0; i < array.length; i+=size) {
//         const newChunk = array.slice(i, i + size);
//         chunkArray.push(newChunk);
//     }
//     return chunkArray;
// }

//solution 2
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

//solution 3
// function chunk(array, size) {
//     const chunked = [];

//     for(let element of array) {
//         const last = chunked[chunked.length - 1];
//         if(!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }

module.exports = chunk;
