var SequelizeAuto = require('sequelize-auto')

console.log("Lets do this");

// MYSQL_DB_USERNAME=root
// MYSQL_DB_PASSWORD=password
// MYSQL_DB_NAME=strata
// MYSQL_DB_HOST=localhost
// MYSQL_DB_PORT=3306

var auto = new SequelizeAuto('strata', 'root', 'password', {
  host: "localhost",
  dialect: "mysql",
  // directory: false,
  port: 3306,
  typescript: true,
});

auto.run(function (err) {
  if (err) throw err;
 
  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});

