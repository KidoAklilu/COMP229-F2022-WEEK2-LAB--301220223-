const connect = require("connect");

//instance app-server
const app = connect();

//custom middleware
function helloWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from NodeJS Application");
}

function helloHtml(req, res, next) {
  res.setHeader("Content-Type", "text/html");
  res.end("<h1> Hello from NodeJS Application as html</h1>");
}

function helloJson(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end("{“message”: “Hello from NodeJS Application as json”}");
}

//add middeleware to connect application
app.use("/html", helloHtml);
app.use("/json", helloJson);
app.use("/", helloWorld);

//run app
app.listen(3000);

console.log("Server runnning at http://localhost:3000");
