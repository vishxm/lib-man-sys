require('db_conn.js');

var mysql = require('mysql');

      connection.query('select * from user', (err,rows) == {
        if(err){
            throw err;
        }      
        console.log(rows);
    });