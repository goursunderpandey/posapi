const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',    // IP address or hostname of the MySQL server
  port: 3306,           // Port number where MySQL is running
  user: 'root',         // MySQL username
  password: 'root',     // MySQL password
  database: 'krishnapos' // Replace with your actual database name
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});

module.exports = connection; // Export the connection object, not the mysql module
