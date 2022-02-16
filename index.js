const path = require("path");
const express = require("express");
const app = express();
app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, "./")));
app.get("/", (req, res) => {
  res.sendFile(path.join(path.join(__dirname, "./"), "index.html"));
});
app.get("/marketplace", (req, res) => {
  res.sendFile(path.join(path.join(__dirname, "./"), "marketplace.html"));
});

app.listen(8080, () => console.log("App running at port 8080"));
