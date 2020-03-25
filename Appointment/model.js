const db = require("../db");
const Sequelize = require("sequelize");
const PracticianFile = require("../PracticiansFile/model");
const PatientFile = require("../PatientFile/model");

const Appointment = db.define(
  "appointment",
  {
    appointmentTime: {
      type: Sequelize.RANGE(Sequelize.DATE),
      allowNull: false
    },
    report: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  },
  {
    timestamps: false
  }
);

Appointment.belongsTo(PracticianFile);
Appointment.belongsTo(PatientFile);
module.exports = Appointment;
