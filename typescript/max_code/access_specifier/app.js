"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Department = void 0;
var Department = /** @class */ (function () {
    // now this emp will not be access outside the class
    function Department(id, name) {
        // private emp: string[] = []; // we cannot access the private in the derived class so we have to make the protected
        this.emp = [];
        this.id = id;
        this.name = name;
    }
    Department.prototype.addEmp = function (name) {
        console.log('base class');
        this.emp.push(name);
    };
    Department.prototype.describe = function () {
        console.log("id is " + this.id);
        console.log("Department is " + this.name);
        console.log("Employee is " + this.emp);
    };
    return Department;
}());
exports.Department = Department;
// const account = new Department(1, 'accounting')
// account.addEmp('rahul') // restrict this by making the emp private , can only be access through method that is addEmp
// account.addEmp('amit')
// account.describe()
// --------------inheritance-------------------//
// by inherit it acquire all the function and the property of base class
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admin) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admin = admin;
        console.log('ItDepartment constructor call');
        _this.admin = admin;
        return _this;
    }
    ITDepartment.createITBranch = function (name) {
        return name;
    };
    Object.defineProperty(ITDepartment.prototype, "setReport", {
        set: function (report) {
            this.report = report;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ITDepartment.prototype, "getReport", {
        get: function () {
            return this.report;
        },
        enumerable: false,
        configurable: true
    });
    // Base class has the abstract function about so we have to implement it
    ITDepartment.prototype.about = function () {
        console.log('about');
    };
    ITDepartment.prototype.addEmp = function (name) {
        console.log('derived class');
        this.emp.push(name);
    };
    ITDepartment.fiscalYear = 2019;
    return ITDepartment;
}(Department));
var objItDepartment = new ITDepartment(1, 'amit');
objItDepartment.addEmp('amit derived');
console.log(objItDepartment.describe());
//------------setter and getter--------------------//
// setter and getter method can be use as the variable
objItDepartment.setReport = 'report is set';
console.log(objItDepartment.getReport);
//-------------------static-----------------------//
// Can be called only by the class name 
// It cant be call on the instance of the class because it is saperated because of the idea behind the static
console.log(ITDepartment.createITBranch('new IT branch is created'));
console.log(ITDepartment.fiscalYear);
