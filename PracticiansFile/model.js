const db = require("../db");
const Sequelize = require("sequelize");
const PatientFile = require("../PatientFile/model");

const PracticiansFile = db.define(
  "PracticiansFile",
  {
    specializations: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false
    },
    education: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false
    },
    prices: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

PatientFile.belongsTo(PracticiansFile);
PracticiansFile.hasMany(PatientFile);

module.exports = PracticiansFile;
