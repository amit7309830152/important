var indices = [];
var array = ['a','a','b', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var i = -1;
var pos_array = [];
var pos = array.indexOf(element);
while(pos > -1) {
    if((pos = array.indexOf(element, 9+ + 1)) > -1) {
        pos_array.push(pos);
    } 
}

console.log(pos_array);