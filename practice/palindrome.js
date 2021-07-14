num = 121
num2 = 0
while ((num % 10) != 0) {
    num2 = num2 * 10 + num % 10
    num = parseInt(num / 10)
    console.log(num);
}

console.log(num2);