const db = require("../db");
const Sequelize = require("sequelize");

const UsersDetail = db.define(
  "usersDetail",
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    whatsAppNumber: {
      type: Sequelize.STRING,
      allowNull: true
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: true
    },
    practician: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    languages: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true
    }
  },
  {
    timestamp: false
  }
);

module.exports = UsersDetail;
