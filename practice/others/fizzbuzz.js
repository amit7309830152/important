const fizzbuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        fb = ''
        if (i % 3 == 0) {
            fb = 'fizz'
        }
        if (i % 5 == 0) {
            fb += 'buzz'
        }
        if (fb == '') {
            fb = i
        }
        console.log(fb);
    }
}

fizzbuzz(100)