const express = require('express');
const app = express();
const port = 3001;


app.use(express.json());


const learnersRoutes = require('./routes/departments');


app.use('/departments', departmentsRoutes);


app.listen(port, () => {
    console.log(`Server is running `);
});
