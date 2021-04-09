const fs = require("fs");
const path = require("path");
const { notes } = require("./db/db.json");
const express = require("express");
const port = process.env.PORT || 3001;
const app = express();
