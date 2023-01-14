const router = require("express").Router();

router.get("/userget", (req, res) => {
  res.send("user test is successfull");
});

router.post("/userpost", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send("your username is " + username);
});

//localhost:3000/api/users/userget

module.exports = router;
