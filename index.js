const Express = require("express");
const app = Express();
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Welcome To Torrent Scrapper")
})
app.use("/Search", require("./Route/Search"));
app.use("/Magnet", require("./Route/Magnet"));
app.use("/Trending", require("./Route/Trending"));
app.use("/Top", require("./Route/Top"));
app.use("/Popular", require("./Route/Popular"));

app.listen(process.env.PORT || 8000, () => {
  console.log("Server has started At port 8000");
});
