let str = 'javascriptloops';
let vowel = ''
let consonent = ''
for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) == 'a' || str.charAt(i) == 'A' || str.charAt(i) == 'e' || str.charAt(i) == 'E' || str.charAt(i) == 'i' || str.charAt(i) == 'I' || str.charAt(i) == 'o' || str.charAt(i) == 'O' || str.charAt(i) == 'u' || str.charAt(i) == 'U') {
        console.log(str.charAt(i))
    } else {
        consonent += str.charAt(i);
    }
}
let final_length = consonent.length > vowel.length ? consonent.length : vowel.length
for (let j = 0; j < final_length; j++) {
    console.log(consonent.charAt(j))
}