set = new Set([21, 29, 100, 28, 27, 100, 29, 45])

console.log(Array.from(set))

console.log(Array.from(set).sort((a, b) => {
    return a - b
}))