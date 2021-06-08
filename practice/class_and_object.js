class student 
{
    constructor () {
        this.name = 'amit';
        this.age = 24;
    }

    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }

};

var stu = new student();
console.log(stu.getName());
console.log(stu.getAge());
