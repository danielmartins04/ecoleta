const express = require("express");
const app = express();

// pegar o banco de dados
const db = require("./database/db");

// configurar pasta pública
app.use(express.static("public"));

//habilitando uso do req.body na aplicação
app.use(express.urlencoded({ extended: true }));

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

app.post('/savepoint', (req, res) => {
    
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err);
            return res.send("Erro no cadastro!");
        }

        console.log("Cadastrado com sucesso");
        console.log(this);
        res.render("create-point.html", { saved: true });
    }

    db.run(query, values, afterInsertData);
});

app.get('/search', (req, res) => {

    const search = req.query.search;
    //console.log(search);
    if (search == "") {
        console.log("oi");
        return res.render("search-results.html", { total: 0 });
    }

    // pegar os dados do db
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, (err, rows) => {
        if (err) {
            return console.log(err);
        }

        const total = rows.length;

        //console.log("Aqui estão seus registros");
        //console.log(rows);
        return res.render("search-results.html", { places: rows, total });
    })

});

app.listen(3000);