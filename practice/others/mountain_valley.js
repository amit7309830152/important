steps = 8
path = 'UDDDUDUU'

checkArray = []
c = 0
for (let i = 0, ca = 0; i < path.length; i++) {
    t = path.charAt(i)
        // checkArray.pop()
    if (checkArray[ca - 1] == 'D' && t == 'D') {
        checkArray.push(t)
        ca++
    } else if (checkArray[ca - 1] == 'U' && t == 'U') {
        checkArray.push(t)
        ca++

    } else if (checkArray[ca - 1] == 'U' && t == 'D') {
        checkArray.pop()
        ca--
    } else if (checkArray[ca - 1] == 'D' && t == 'U') {
        checkArray.pop()
        ca--
        if (checkArray.length == 0) {
            c++
        }
    } else {
        checkArray.push(t)
        ca++
    }

}

console.log(c)