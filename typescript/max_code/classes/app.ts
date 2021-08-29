class Departments {
    name:string;
    constructor(n) {
        this.name= n    
    }

    // describe() {
    //     console.log(`Departments is ${this.name}`);
    // }

    describe(this:Departments) {
        // setting more security 
        // by writing this:departments ensure that this must be called through by departments class object only
        console.log(`Departments is ${this.name}`);
    }
}

const account = new Departments('accounting')

// account.describe() // here you will not get the error


// const aObj = {describe:account.describe}

// aObj.describe() // here you will get the ERROR becz aObj is not the type of departments class


// to fix the above error 
// const aObj = {name:'sumit',describe:account.describe} making object as the departments type
// aObj.describe() // Now the error is gone as we make the object type as departments

 