const db = require("../db");
const Sequelize = require("sequelize");

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
    timestamp: false
  }
);

module.exports = PracticiansFile;
