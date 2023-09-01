const express = require("express");
const app = express();
const path = require("path");
// "path" est requis pour la ligne suivante
app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

const request = require("request");
const fs = require("fs");
const { PORT } = require("./config.js");
const { API_KEY } = require("./config.js");


app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get("/ticker-result=:id", function (req, res) {
  var ticker = req.params.id;
  fs.readFile(__dirname + "/" + ticker + ".json", "utf8", function (err, data) {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
});

app.listen(PORT, () => {

  const url =
    "https://api.disneyapi.dev/character&apikey=" + API_KEY ;
  request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, res, data) => {
      if (err) {
        console.log("Error:", err);
      } else if (res.statusCode !== 200) {
        console.log("Status:", res.statusCode);
      } else {
        // data is successfully parsed as a JSON object:
        var newData = JSON.stringify(data);
        fs.writeFile(__dirname + "/Frontend/static/js/views/" + DisneyCaracter + ".json", newData, (err) => {
          if (err) throw err;
          console.log("Saved!");
        });
      }
    }
  );

  console.log("Server is running on PORT", PORT);
});
