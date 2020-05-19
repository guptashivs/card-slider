const express = require("express");
const template = require("./template");
const htmlContent = require("./responsecontent");
const server = express();

server.use("/", express.static("build/client"));
server.get("*", (req, res) => res.send(template));
server.post("/offer-card", (req, res) => {
  console.log("offer-card response");
  res.status(200).json({
    offerData: htmlContent,
  });
});
server.listen(3000, function () {
  console.log("server running at http://localhost:3000");
});
