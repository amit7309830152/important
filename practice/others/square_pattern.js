n = 5;
p = ''

for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n) {
            p += "*";
        } else {
            p += " ";
        }
    }
    p += '\n'
}
console.log(p);