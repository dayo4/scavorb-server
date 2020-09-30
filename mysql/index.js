const mysql = require('mysql')

const con = mysql.createConnection({
    // host: process.env.HOST,
    // port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'demo',
})

con.connect(function (err) {
    if (err)
        throw err
    con.query(`CREATE TABLE first (
        id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY
    )`, function (err, res) {
        if (err)
            throw err
        console.log(res)
    })
})