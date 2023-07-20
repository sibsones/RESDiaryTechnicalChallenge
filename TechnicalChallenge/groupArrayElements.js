function groupArrayElements(array, nChunks) {
    let chunkLength = Math.ceil(array.length / nChunks);
    let splitArray = [];

    for (let i = 0; i < nChunks; i++) {
        splitArray.push(array.slice(i * chunkLength, (i * chunkLength) + chunkLength));
    }                         

    return splitArray;
}

let testArray = [1,2,3,4,5];
let chunks = 3;