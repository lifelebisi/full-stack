const express = require('express');
const app = express();
const port = 3001;


app.use(express.json());


const learnersRoutes = require('./routes/learners');


app.use('/learners', learnersRoutes);


app.listen(port, () => {
    console.log(`Server is running `);
});
