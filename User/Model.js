const db = require("../Config/DB");

const customer = {};

customer.selectAll = (req,callback) => {
    db.query("CALL Proc_SelectAll_Customer()", [], (err, res) => {
        if (err) {
            return callback(err, null);  
        }
        callback(null, res);  
    });
};

module.exports = customer;
