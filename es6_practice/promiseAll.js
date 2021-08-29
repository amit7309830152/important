f1 = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(`this is time ${time}`)
        }, time);
    })

    // return 'asd'
}

f2 = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(`this is time ${time}`)
        }, time);
    })

    // return 'asd'
}

(promise = async() => {
    console.log(await Promise.all([f1(1000), f2(2000)]))
})()