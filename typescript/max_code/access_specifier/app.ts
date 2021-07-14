export abstract class Department {
    readonly id: number // if you don not want to change the id 
    name: string;
    // private emp: string[] = []; // we cannot access the private in the derived class so we have to make the protected
    protected emp: string[] = [];
    // now this emp will not be access outside the class

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    abstract about(this: Department): void

    addEmp(name) {
        console.log('base class');
        this.emp.push(name)
    }

    describe(this: Department) {
        console.log(`id is ${this.id}`);
        console.log(`Department is ${this.name}`);
        console.log(`Employee is ${this.emp}`);
    }
}

// const account = new Department(1, 'accounting')
// account.addEmp('rahul') // restrict this by making the emp private , can only be access through method that is addEmp
// account.addEmp('amit')
// account.describe()

// --------------inheritance-------------------//
// by inherit it acquire all the function and the property of base class
class ITDepartment extends Department {

    private report: string;
    static fiscalYear = 2019;

    static createITBranch(name: string) {
        return name
    }

    set setReport(report: string) {
        this.report = report
    }

    get getReport() {
        return this.report
    }

    // Base class has the abstract function about so we have to implement it
    about() {
        console.log('about');
    }

    constructor(id: number, public admin: string) {
        super(id, 'IT')
        console.log('ItDepartment constructor call');
        this.admin = admin
    }

    addEmp(name) {
        console.log('derived class');
        this.emp.push(name)
    }
}


const objItDepartment = new ITDepartment(1, 'amit')
objItDepartment.addEmp('amit derived')
console.log(objItDepartment.describe());
//------------setter and getter--------------------//

// setter and getter method can be use as the variable

objItDepartment.setReport = 'report is set'
console.log(objItDepartment.getReport);

//-------------------static-----------------------//

// Can be called only by the class name 
// It cant be call on the instance of the class because it is saperated because of the idea behind the static
console.log(ITDepartment.createITBranch('new IT branch is created'));
console.log(ITDepartment.fiscalYear);





