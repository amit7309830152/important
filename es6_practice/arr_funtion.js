< html >
    <
    input type = "number"
id = "num" >
    <
    br >
    <
    input type = "submit"
value = "Check"
id = "btn"
onclick = "saveNum()" >

    <
    script >
    let arr = [2, 3, 5, 6, 7, 8, 66, 77, 88];
let result = arr.find(findgrt6);

function findgrt6(value, index, array) {
    return value > 6;
} <
/script>

<
/html>