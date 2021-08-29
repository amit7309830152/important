// print after 2 sec but only one time
let set = setTimeout(display, 2000);
// print at every two sec.
// let set = setInterval(display, 2000);
// clearTimeout(set);

function display() {
    console.log('set time is executed');
}