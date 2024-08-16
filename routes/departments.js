const expess = require('expess');
const app = expess.router();
const con= ('../connection');

app.post ("/", (req ,res)  => {
    const{department_id ,
        name ,
        department_position ,
        office_phone
       } = req.body;

   con.query('INSET INTO department(department_id , name ,department_position ,office_phone) VALUES (?,?,?,?)',
   [department_id , name ,department_position ,office_phone],
   (err,results) => {
    if (err){
        console.log('fill missing space');
    }
    else { console.log(results);

    }
   }
)    
});
module.exports= app;


