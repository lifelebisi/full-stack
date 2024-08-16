const mysql = require('mysql2')

const con = mysql.createConnection({
host : 'localhost',
user:'root',
password:'Letsdoit!',
database:'collage'

})
con.connect ((err)=>{
    if (err) {console.error('not connected');}

    else{
        console.log('connected');
    }
} );
module.exports= con;