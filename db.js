const mysql = require('mysql');

//mysql 연결
const db = mysql.createPool({
  host: "fat-meow-db.cqhzgirlf8xg.ap-northeast-1.rds.amazonaws.com",
  user: "root",
  password: "fatmeow1234",
  database: "fatMeow",
})
