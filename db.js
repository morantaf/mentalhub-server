const Sequelize = require("sequelize");

const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseURL);

db.sync({ force: true })
  .then(console.log("Database synchronized"))
  .catch(err => console.log(err));

module.exports = db;
