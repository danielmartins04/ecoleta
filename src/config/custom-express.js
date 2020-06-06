const express = require("express");
const app = express();

// pegar o banco de dados
const db = require("../database/db");

// configurar pasta pública
app.use(express.static("public"));

//habilitando uso do req.body na aplicação
app.use(express.urlencoded({ extended: true }));

module.exports = app;