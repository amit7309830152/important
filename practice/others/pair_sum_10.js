ar = [1, 2, 3, 4, 5, 6, 4]
pair = []

for (let i = 0; i < ar.length; i++) {
    const element = ar[i];
    p = ar.filter((e, i) => {
        if ((element + e) == 10) {
            return (element + e) == 10
        }
    })
    if (p[0]) {
        pair.push([element, p[0]])
    }
}

console.log(pair);