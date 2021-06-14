arr = [1, 2, 3, 54, 6, 1, 2, 3]

arr2 = arr.filter((ele, i, arr) => {
    if (arr.indexOf(ele, i + 1) === -1) {
        return ele
    }
})

console.log(arr2)