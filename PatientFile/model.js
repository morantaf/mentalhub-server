const db = require("../db");
const Sequelize = require("sequelize");

const PatientsFile = db.define("patientsFile", {
  conditions: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  exercises: {
    type: Sequelize.ARRAY(Sequelize.TEXt)
  }
});

module.exports = PatientsFile;
