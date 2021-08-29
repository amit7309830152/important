var mongoose = require('mongoose');

// create connetion 
mongoose.connect('localhost:27017/employee', {useNewUrlParser:true});

// to connect with database we make connection  
var conn = mongoose.connection;

// we have to create the schema as the table now this is used as the model later.
var employe_schema = new mongoose.Schema({
    id: Number,
    name: String,
    age:Number,
});

// Now we will create the model for that schema like we create the table in the sql
var empModel = mongoose.model('employee', employe_schema);

// we made the collection emp_table by using the employe_schema
// now we will create the new object to insert the detail in the table.
var new_emp = new empModel({
    id:1,
    name:'amit',
    age:24
})

conn.on('connected',  function () {
    console.log('connection is establish');
});

conn.on('disconnected',  function () {
    console.log('connection is establish');
});

conn.on('error', console.error.bind(console,'connection error :'))

conn.once('open', function() {
    new_emp.save(function(err,res) {
        if(err) {
            throw error ;
            console.log(res);
            conn.close();
        }
    })
})
console.log(new_emp);
