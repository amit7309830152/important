process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
    input_stdin += data;
});


process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split("\n");

    //Write code here
    v = input_stdin_array[0]
    length = parseInt((input_stdin_array[1])) + 2
    for (i = 2; i < length; i++) {
        p = 1
        s = input_stdin_array[i]
        for (j = 0; j <= s.length; j++) {
            if (v.indexOf(s.charAt(j)) == -1) {
                p = 0
                break
            }
            v = v.substring(v.indexOf(s.charAt(j)))
        }
        if (p == 0) {
            process.stdout.write("NEGATIVE" + "\n");
        } else {
            process.stdout.write("POSITIVE" + "\n");
        }
        v = input_stdin_array[0]
    }
    // process.stdout.write(""+output+"\n");
});