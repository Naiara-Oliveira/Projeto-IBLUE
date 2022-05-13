const {
  Router
} = require("express");
const {
  userRegistrationRepository,
  userCreate,
  userUpated,
  findByUser
} = require('../repository/user-repository/user-registration-respository')

const router = Router();



router.get("/", async (req, res) => {
  const users = await userRegistrationRepository();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const {id}= req.params
  const user = await findByUser(id)
  res.json(user);
});



router.post("/", async (req, res) => {
  const {nome_usuario,dt_Nascimento} = req.body;
  console.log(req.body)
  console.log(nome_usuario, dt_Nascimento)
  const user = await userCreate(
    nome_usuario,
    dt_Nascimento,
  );
  res.json(user);
});

router.put('/:id', async (req, res) => {
  const {
    id
  } = req.params
  const {
    nome_usuario,
    dt_Nascimento
  } = req.body;
  const user = await userUpated(id, nome_usuario, dt_Nascimento)
    return res.json(user)
})

module.exports = router