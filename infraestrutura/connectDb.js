const mysql = require('mysql')

const connectDb = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'C0nnect123',
    database: 'aluguel_carros'
})

module.exports = connectDb;