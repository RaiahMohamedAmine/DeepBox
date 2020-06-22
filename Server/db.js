const mysql = require('mysql');
const config = require('./config');

var connection =mysql.createConnection({
    host :config.host,
    database: config.database,
    user:config.user,
    password:config.password,
    port :config.port
});

connection.connect((err)=>{
    if (err)
        console.log(err);
    else {
        console.log('Connecting to MYSQL DB '+ config.host + " on port : " +config.port);
        //deleteDBS(connection)
        //createDBs(connection);
    }
});

const createDBs =(connection)=> {
        connection.query('CREATE TABLE malade ('
        +'id varchar(9) primary key,'
        +'nom varchar(20) not null,'
        +'prenom varchar(20) not null,'
        +'etat varchar(20) not null default \'negatif\' CHECK (etat=negatif OR etat=positif OR etat=suspect),'
        +'tel varchar(10) unique,'
        +'adresse varchar(30) not null,'
        +'siege varchar(20) not null,'
        +'dateNaissance varchar(10) not null,'
        +'dateAjout varchar(20) not null'
    +');', (err)=>{
        if (err)
            console.log(err);
        else {
            connection.query('CREATE TABLE admin ('
            +'username varchar(20) primary key,'
            + 'pass varchar (20) not null'
            +')', (err)=>{
                if (err)
                    console.log(err);
                else 
                    console.log('Malade and Admin DBs are created succefully');
            });
        }
    });
}

const deleteDBS = (connection)=>{
    connection.query("DROP TABLE malade, admin",(err)=>{
        if (err)
            console.log(err);
        else {
            console.log('DBS Deleted !')
        }
    });
}
module.exports = connection;