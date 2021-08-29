class student 
{
    constructor () {
        this.name = 'amit';
        this.age = 24;
    }

    getName() {
        return this.name;
    }
 

};

student.prototype = {
    address : "dlw",
    getAddrs:function(){
        return this.age;
    },
}

var stu = new student();
console.log(stu.getAddrs());


// getAge() {
//     return this.age;
// }
