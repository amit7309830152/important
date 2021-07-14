var create2DArray = (n, m) => {
    ar = []
    for (let i = 0; i < n; i++) {
        ar.push([])
    }
    return ar
}



var displayArray = (ar) => {
    printArray = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            printArray += ar[i][j] + ' '
        }
        printArray += '\n'
    }
    return printArray
}


console.log(create2DArray(2, 2));