const { Router } = require("express");
const PracticiansFile = require("../PracticiansFile/model");
const User = require("../User/model");
const auth = require("../auth/middleware");
const Sequelize = require("sequelize");

const router = new Router();

async function getPracticians(request, response, next) {
  try {
    const limit = request.query.limit || 10;
    const offset = request.query.offset || 0;
    const search = request.query.search;

    console.log("limit", limit);

    const practicians = await PracticiansFile.findAndCountAll({
      limit,
      offset,
      include: [User],
    });

    if (search) {
      const searchedPracticians = practicians.rows.filter((practician) =>
        practician.dataValues.specializations.find(
          (element) => element.toLowerCase() === search.toLowerCase()
        )
      );

      console.log(practicians.rows);

      const dataToSend = {
        count: searchedPracticians.length,
        rows: searchedPracticians,
      };

      response.json(dataToSend);
    } else {
      response.json(practicians);
    }
  } catch (error) {
    next(error);
  }
}

async function createPracticianFile(request, response, next) {
  try {
    const fullRequest = { ...request.body, userId: request.user.dataValues.id };
    const practicianFile = await PracticiansFile.create(fullRequest);
    response.json(practicianFile);
  } catch (error) {
    next(error);
  }
}

async function getUniquePractician(request, response, next) {
  try {
    const id = request.params.id;
    const uniquePractician = await PracticiansFile.findByPk(id, {
      include: [User],
    });
    response.json(uniquePractician);
  } catch (error) {
    next(error);
  }
}

async function editPractician(request, response, next) {
  try {
    const id = request.params.id;
    const practician = await PracticiansFile.findByPk(id);

    const updatedPractician = await practician.update(request.body);
    response.json(updatedPractician);
  } catch (error) {
    next(error);
  }
}

router.get("/practicians", getPracticians);
router.get("/practicians/:id", getUniquePractician);
router.post("/practicians", auth, createPracticianFile);
router.put("/practicians/:id", auth, editPractician);

module.exports = router;
