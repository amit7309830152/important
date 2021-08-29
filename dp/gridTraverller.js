const gridTravller = (n, m, memo = {}) => {


    if (n + ',' + m in memo) return memo[n + ',' + m]
    if (n == 0 || m == 0) return 0
    if (n == 1 && m == 1) return 1

    memo[n + ',' + m] = (gridTravller(n - 1) + gridTravller(m - 1))
    return gridTravller()
    console.log('aa')

}

gridTravller(1, 1)