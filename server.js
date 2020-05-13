const express = require('express');
const connectDB = require('./DB/connection')
const app = express();

connectDB();
app.use(express.json({
    extended: false
}))

const VendorRoute = require('./Api/Vendor')
const EmployeeRoute = require('./Api/Employee')
const TimeSheet = require('./Api/TimeSheet')
const WorkingDetails = require('./Api/WorkingDetails')
const ListOfEmployees = require('./Api/ListOfEmployees')
const DaySheet = require('./Api/DaySheet')
const Counter = require('./Api/Counter')

app.use('/Vendor', VendorRoute);
app.use('/Employee', EmployeeRoute);
app.use('/TimeSheet', TimeSheet);
app.use('/WorkingDetails', WorkingDetails);
app.use('/ListOfEmployees', ListOfEmployees);
app.use('/DaySheet', DaySheet);
app.use('/Counter', Counter);

const port = process.env.port || 5000;
app.listen(port, () => console.log("Server started"));