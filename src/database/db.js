// importando sqlite3
const sqlite3 = require("sqlite3").verbose();

// criar objeto que fará operação no banco de dados
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;
// db.serialize(() => {
//     // criando uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // inserindo dados
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         "PaperSider",
//         "Rio do Sul, Santa Catarina",
//         "Num 277",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos e lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err);
//         }

//         console.log("Cadastrado com sucesso");
//         console.log(this);
//     }

//     //db.run(query, values, afterInsertData);


//     //Deletar dados de uma tabela
//     db.run('DELETE FROM places WHERE id = ?', [7], (err) => {
//         if (err) {
//             return console.log(err);
//         }

//         console.log("Registro deletado com sucesso.");
//     });


    // Consultar dados de uma tabela
    // db.all(`SELECT * FROM places`, (err, rows) => {
    //     if (err) {
    //         return console.log(err);
    //     }

    //     console.log("Aqui estão seus registros");
    //     console.log(rows);
    // })


// });