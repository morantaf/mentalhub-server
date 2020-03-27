const { Router } = require("express");
const PracticianFile = require("../PracticiansFile/model");

const router = new Router();

async function getPracticians(request, response, next) {
  try {
    const limit = request.query.limit || 20;
    const offset = request.query.offset || 0;

    const practicians = await PracticianFile.findAndCountAll({
      limit,
      offset
    });

    response.json(practicians);
  } catch (error) {
    next(error);
  }
}

async function getUniquePractician(request, response, next) {
  try {
    const userId = request.params.id;
    const uniquePractician = await User.findAll({ where: { userId: userId } });
    response.json(uniquePractician);
  } catch (error) {
    next(error);
  }
}

router.get("/practicians", getPracticians);
router.get("/practicians/:id", getUniquePractician);

module.exports = router;
