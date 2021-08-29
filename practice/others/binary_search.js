ar = [3, 5, 8, 12, 15, 56, 87, 98]
e = 57
si = 0
ei = ar.length - 1

while (si < ei) {
    if (ar[parseInt((si + ei) / 2)] == e) {
        console.log(`position ${parseInt((si + ei) / 2) + 1}`);
        break
    }
    if (ar[parseInt((si + ei) / 2)] > e) {
        ei = parseInt((si + ei) / 2) - 1
    } else {
        si = parseInt((si + ei) / 2) + 1
    }
}