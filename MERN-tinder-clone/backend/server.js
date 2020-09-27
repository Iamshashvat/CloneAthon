const express = require("express");
const mongoose = require("mongoose");
const cards = require("./models/cards");
const cors = require("cors");
//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url ="<MONGODB-URI>";

//Middleware
app.use(express.json());
app.use(cors());
//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Connected! working fine"));
app.post("/cards", (req, res) => {
  const dbCard = req.body;
  console.log(dbCard);

  cards.create(dbCard, (err, data) => {
    console.log(data);
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/cards", (req, res) => {
  const dbCard = req.body;
  cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Listening on Localhost: ${port}`));
