const db = require("../db");
const Sequelize = require("sequelize");
const PatientsFile = require("../PatientsFile/model");

const PracticiansFile = db.define(
  "practiciansFile",
  {
    presentation: {
      type: Sequelize.TEXT,
    },
    specializations: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    education: {
      type: Sequelize.ARRAY(Sequelize.JSON),
    },
    prices: {
      type: Sequelize.ARRAY(Sequelize.JSON),
    },
  },
  {
    timestamps: false,
  }
);

PatientsFile.belongsTo(PracticiansFile);
PracticiansFile.hasMany(PatientsFile);

module.exports = PracticiansFile;
