const fetch = require("node-fetch");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/dates/:m/:d", (req, res) => {
  const month = req.params.m;
  const day = req.params.d;
  fetch(`http://history.muffinlabs.com/date/${month}/${day}`)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => console.log(`ERROR : ${err}`));
});

app.get("*", (req, res) => {
  res.json({
    error: true,
    message: "Route not found"
  });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
