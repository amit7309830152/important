arr = [0, 0, 2, 2, 2, 2, 2, 3, 0, 0, 4, 5, 6, 3, 4, 7, 8, 9, 9, 9];
arr2 = arr.filter((x, index, array) => {
    if (arr.indexOf(x, index + 1) == -1) {
        return x;
    }
});
console.log(arr2);


