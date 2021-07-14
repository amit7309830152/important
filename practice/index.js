maxL = -1
str = "abcbdbdsdfng"
checkDistict = (str) => {
    str2 = str.split('')
    for (let i = 0; i < str2.length; i++) {
        if (str2.includes(str2[i], i + 1)) {
            return false
        }
    }
    return true
}

for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
        if (checkDistict(str.substring(i, j + 1))) {
            if (str.substring(i, j + 1).length > maxL) {
                max = str.substring(i, j + 1)
                maxL = str.substring(i, j + 1).length
            }
        }
    }
}

console.log(max);
console.log(max.length);