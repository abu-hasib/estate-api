const express = require("express");
const app = express()
const router = express.Router();

const Users = require("./user-model")

const register = (req, res) => {
  console.log("Thsi  sis th#####: ", req.body)
  const {username, password, website} = req.body

  console.log(`Name: ${username}, Email: ${password}, blah: ${website}`)
  const newUser = {
    username,
    password,
    website
}

  const db = req.app.locals.db
  const user = db.collection("users")
  Users.createUser(user, newUser)
  res.sendStatus(200);
};

router.post("/users/register", register);

module.exports = router;
