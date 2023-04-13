const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  const date = new Date();
  const resultDays = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${resultDays.getDate()}/${
      resultDays.getMonth() + 1
    }/${resultDays.getFullYear()}`
  );
});

module.exports = app;
