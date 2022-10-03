const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended : true}))

app.get("/", (req, res) => {
  res.send([
    {
      name: "vishnu",
      age: 20,
    },
    {
      name: "mohan",
      age: 56,
    },
    {
      name: "mani",
      age: 54,
    },
    {
      name: "unni",
      age: 16,
    },
  ]);
});

app.listen(3000);
