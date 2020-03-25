const db = require("../db");
const Sequelize = require("sequelize");

const Appointment = db.define("appointment", {
  appointmentTime: {
    type: Sequelize.RANGE(DATE),
    allowNull: false
  }
});

module.exports = Appointment;
