import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host:process.env.mysql_host,
    user:process.env.mysql_user,
    password:process.env.mysql_password,
    database:process.env.mysql_BDD,
    typeCast: function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
            return (field.string() === '1'); 
        } else {
            return next();
        }
    }
    
}) 

console.log('BD conectado!');

export { con }