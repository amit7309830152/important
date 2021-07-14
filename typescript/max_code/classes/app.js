var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    // describe() {
    //     console.log(`Department is ${this.name}`);
    // }
    Department.prototype.describe = function () {
        // setting more security 
        // by writing this:department ensure that this must be called through by department class object only
        console.log("Department is " + this.name);
    };
    return Department;
}());
var account = new Department('accounting');
// account.describe() // here you will not get the error
// const aObj = {describe:account.describe}
// aObj.describe() // here you will get the ERROR becz aObj is not the type of department class
// to fix the above error 
// const aObj = {name:'sumit',describe:account.describe} making object as the department type
// aObj.describe() // Now the error is gone as we make the object type as department
