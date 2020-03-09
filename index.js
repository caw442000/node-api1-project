const express = require('express');
const shortid = require('shortid');

const server = express();


server.use(express.json());

let users = [];


server.get("/api/users", (req, res) => {
  res.status(200).json(users);

});

server.get(`/api/users/:id`, (req, res ) => {
  const userid = req.params;
  const userfound = users.find(user => user.id === {userid})
  // console.log(userfound)
  res.status(201).json(userfound)

});

server.post("/api/users", (req, res) => {
  const userInfo = req.body;

  userInfo.id = shortid.generate();
  users.push(userInfo);

  res.status(201).json(userInfo);

  // res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
});


const PORT = 5000;
server.listen(PORT, () => 
console.log(`\n **API on http://localhost:${PORT} **\n`)
);