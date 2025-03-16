const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',  
    user: 'root',       
    password: '',      
    database: 'my-database'
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database successfully');

    connection.query('SELECT * FROM user', (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return;
        }
        console.log('User table data:', results);
    });
    connection.end();
});
