const express = require("express")
const app = express();
require('dotenv').config();
const PORT = process.env.PORT||6000;

require("../posapi/Config/DB")
const customer = require("./User/Route")
app.use(customer)



app.listen(PORT , () => {
    console.log(`server running on PORT ${PORT}`)
})