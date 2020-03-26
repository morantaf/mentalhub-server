const db = require("../db");
const Sequelize = require("sequelize");
const PracticianFile = require("../PracticiansFile/model");
const PatientFile = require("../PatientFile/model");

const User = db.define(
  "users",
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
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    profilePicture: {
      type: Sequelize.STRING,
      allowNull: true
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
    timestamps: false
  }
);

PracticianFile.belongsTo(User);
PatientFile.belongsTo(User);
User.hasOne(PracticianFile);
module.exports = User;
