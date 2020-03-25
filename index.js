const express = require("express");
const cors = require("cors");
const db = require("./db");
const UsersDetail = require("./UsersDetail/model");
const PracticiansFile = require("./PracticiansFile/model");
const Appointment = require("./Appointment/model");
const app = express();
const corsMiddleware = cors();
const jsonParser = express.json();
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(corsMiddleware);
app.use(jsonParser);
