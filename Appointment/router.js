const { Router } = require("express");
const Appointment = require("./model");
const auth = require("../auth/middleware");

const router = new Router();

async function createAppointment(request, response, next) {
  try {
    const fullRequest = { ...request.body, userId: request.user.dataValues.id };
    console.log("fullRequest ?", fullRequest);
    const appointment = await Appointment.create(fullRequest);
    response.json(appointment);
  } catch (error) {
    next(error);
  }
}

async function getAppointmentPractician(request, response, next) {
  try {
    const practicianId = request.params.id;
    const appointments = await Appointment.findAll({
      where: { practiciansFileId: practicianId },
    });

    response.json(appointments);
  } catch (error) {
    next(error);
  }
}

router.post("/appointments", auth, createAppointment);
router.get("/appointments/practician/:id", getAppointmentPractician);

module.exports = router;
