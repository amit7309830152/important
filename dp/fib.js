// const fib = (n, memo = {}) => {
//     if (n in memo) {
//         return memo[n]
//     }
//     if (n <= 2) {
//         return 1
//     }
//     memo[n] = fib(n - 1) + fib(n - 2)
//     return (memo[n])
// }

// console.log(fib(6))

// without dp
const fib = (n) => {
    if (n <= 2) {
        return 1
    }
    return (fib(n - 1) + fib(n - 2))
}

for (i = 1; i <= 6; i++) {
    console.log(fib(i))
}