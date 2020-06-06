const app = require("./config/custom-express");

const db = require("./database/db");

const rotas = require("./routes/routes");
rotas(app);

app.listen(3000, () => {
    console.log("Servidor rodando");
});