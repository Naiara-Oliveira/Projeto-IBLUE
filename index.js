const express = require("express");
const app = express();
const routerUser = require("./infrastructure/routes/users-routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerUser);


const {
  USER_REGISTRATION_MODEL,
} = require("./infrastructure/database/model/user-model/user-registration-model");


(async () => {
  const database = require("./infrastructure/configuration/connect-database");
  try {
    const resultado = await database.sync();
    console.log(resultado);
    console.log("Testando  banco");
  } catch (error) {
    console.log(error);
  }
})();

app.listen(3001, () => console.log("Server funcionando na porta 3001"));
