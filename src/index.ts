var SequelizeAuto = require('sequelize-auto')

console.log("Lets do this");

var auto = new SequelizeAuto('strata', 'root', 'password', {
  host: "localhost",
  dialect: "mysql",
  // directory: "./src/db/models",
  directory: false,
  port: 3306,
  typescript: true,
});

auto.run(function (err) {
  if (err) throw err;
  // console.log(auto.tables); // table list
  // console.log(auto.foreignKeys); // foreign key list
});

