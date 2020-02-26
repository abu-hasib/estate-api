const express = require("express");
const logger = require("./logger");
const MongoDB = require("./conn")

const app = express();


app.use(express.json());
app.use(express.urlencoded());
app.use(logger);


app.use(require("./site/router"));
app.use("/apiv1", require("./users/router"));

module.exports = app;
