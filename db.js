const mysql = require("mysql")

const db = mysql.createPool({
    host:"us-cdbr-east-05.cleardb.net",
    user:"bb1da0513308c5",
    password:"2a9cdb01",
    database:"heroku_bcb3d8399fb92b9"
})

module.exports = db;

// mysql://b2cf8338868801:8b7b490f@us-cdbr-east-05.cleardb.net/heroku_52b7e56b8226147?reconnect=true
//New app bd
// mysql://bb1da0513308c5:2a9cdb01@us-cdbr-east-05.cleardb.net/heroku_bcb3d8399fb92b9?reconnect=true