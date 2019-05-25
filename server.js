const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/catsController.js");