var fs = require("fs");
fs.readFile(__dirname+"/hello.txt","utf8",(err, data)=> {
    console.log(err);
    console.log(data);
})
