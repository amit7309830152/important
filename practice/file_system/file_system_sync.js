try {
    const fs = require("fs");
    data  = fs.readFileSync(__dirname+"/hello.txt","utf8");
       console.log(data) ;
} catch (error) {
    console.log('this is error '+error);
}
console.log('this is last text');









