const { Router } = require("express");
const PracticiansFile = require("../PracticiansFile/model");
const User = require("../User/model");

const router = new Router();

async function getPracticians(request, response, next) {
  try {
    const limit = request.query.limit || 20;
    const offset = request.query.offset || 0;

    const practicians = await PracticiansFile.findAndCountAll({
      limit,
      offset
    });

    response.json(practicians);
  } catch (error) {
    next(error);
  }
}

async function createPracticianFile(request, response, next) {
  try {
    //const fullRequest = { ...request.body, userId: request.user.dataValues.id };
    const test = {
      specializations: ["anxiety", "sexual disorder"],
      education: ["PhD", "Master"],
      prices: [50, 60],
      userId: 1
    };
    const practicianFile = await PracticiansFile.create(test);
    response.json(practicianFile);
  } catch (error) {
    next(error);
  }
}

async function getUniquePractician(request, response, next) {
  try {
    const userId = request.params.id;
    const uniquePractician = await PracticiansFile.findAll({
      where: { userId: userId },
      include: [User]
    });
    response.json(uniquePractician);
  } catch (error) {
    next(error);
  }
}

router.get("/practicians", getPracticians);
router.get("/practicians/:id", getUniquePractician);
router.post("/practicians", createPracticianFile);

module.exports = router;
