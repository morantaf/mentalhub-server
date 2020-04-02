const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const PracticianFile = require("../PracticiansFile/model");

const router = new Router();

async function createUser(request, response, next) {
  try {
    const { email, password, practician, firstName, lastName } = request.body;
    if (!email || !password || !practician || !firstName || !lastName) {
      response.status(400).send("Please complete the form");
    } else {
      const user = {
        ...request.body,
        password: bcrypt.hashSync(password, 10)
      };
      const createUser = await User.create(user);

      response.json(createUser);
    }
  } catch (error) {
    next(error);
  }
}

async function getPracticians(request, response, next) {
  try {
    const limit = request.query.limit || 20;
    const offset = request.query.offset || 0;

    const practicians = await User.findAndCountAll({
      where: { practician: true },
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
    const uniquePractician = await User.findByPk(userId);
    if (uniquePractician.dataValues.practician === false) {
      response.json("This practician doesn't exist");
    } else {
      response.json(uniquePractician);
    }
  } catch (error) {
    next(error);
  }
}

router.post("/signup", createUser);
router.get("/practicians", getPracticians);
router.get("/practicians/:id", getUniquePractician);

module.exports = router;
