//import do mysql
const mysql = require('mysql2');

//conection mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'saboroso',
    password: 'password'
  });


  //agora precisamos retornar essea conexão para o arquivo que fez o require desse DB quando a gente estiver usando
  module.exports = connection;

  //então asim eu passo o meu objeto de coneção pra quem tiver solicitando
