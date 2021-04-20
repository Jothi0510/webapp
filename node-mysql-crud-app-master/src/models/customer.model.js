'user strict';
var dbConn = require('./../../config/db.config');

//Customer object create
var Customer = function(customer){
    this.first_name     = customer.first_name;
    this.last_name      = customer.last_name;
    this.email          = customer.email;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};
Customer.create = function (newCust, result) {    
    dbConn.query("INSERT INTO Customer set ?", newCust, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Customer.findById = function (id, result) {
    dbConn.query("Select * from Customer where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Customer.findAll = function (result) {
    dbConn.query("Select * from Customer", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Customer : ', res);  
            result(null, res);
        }
    });   
};
Customer.update = function(id, customer, result){
  dbConn.query("UPDATE Customer SET first_name=?,last_name=?,email=?,phone=? WHERE id = ?", [customer.first_name,customer.last_name,customer.email,customer.phone], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Customer.delete = function(id, result){
     dbConn.query("DELETE FROM Customer WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Customer;