const customer = require('./Model');

const getAllCustomers = (req, res) => {
    customer.selectAll(req,(err, data) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while fetching data' });  
        }
        res.status(200).json(data);  
    });
};


module.exports = {
    getAllCustomers,  
};
