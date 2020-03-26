const { Router } = require("express");
const User = require("./model");

const router = new Router();

async function createUser(request, response, next) {
  try {
    const createdUser = await User.create(request.body);
    response.json(createdUser);
  } catch (error) {
    next(error);
  }
}

router.post("/signup", createUser);

module.exports = router;
