const express = require("express");
const app = express();
app.use(express.json());
const {
  USER_REGISTRATION_MODEL,
} = require("./infrastructure/database/model/user-model/user-registration-model");

(async () => {
  const database = require("./infrastructure/configuration/connect-database");
  try {
    const resultado = await database.sync();
    console.log(resultado);
    console.log("Banco funfando");
  } catch (error) {
    console.log(error);
  }
})();

app.get("/", async (req, res) => {
  const users = await USER_REGISTRATION_MODEL.findAll();
  res.json(users);
});

app.post("/", async (req, res) => {
 const { nome_usuario} = req.body;

  const user = await USER_REGISTRATION_MODEL.create({
  nome_usuario,
   });

  res.json(user);
});

app.listen(3001, () => console.log("Server funcionando na porta 3001"));
