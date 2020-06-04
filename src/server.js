const express = require("express");
const app = express();

// configurar pasta pública
app.use(express.static("public"));

// utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: app,
    noCache: true 
});

app.get('/', (req, res) => {
    return res.render("index.html", { title: "Um titulo" });
});

app.get('/create-point', (req, res) => {
    return res.render("create-point.html");
});

app.get('/search', (req, res) => {
    return res.render("search-results.html");
});

app.listen(3000);