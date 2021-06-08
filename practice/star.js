rating = 2.5
integer_part = Math.trunc(rating)
decimal = rating - integer_part
total_printed_star = 0
for (let i = 1; i <= integer_part; i++) {
    console.log('full')
    total_printed_star++
}
if (decimal != 0) {
    console.log('half')
    total_printed_star++
}

if (total_printed_star != 5) {
    for (let i = total_printed_star; i < 5; i++) {
        console.log('empty')
    }
}