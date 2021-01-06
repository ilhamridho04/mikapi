var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json(["Ilham Ridho Asysyifa'a", "Teknik Informatika B 2017"]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});