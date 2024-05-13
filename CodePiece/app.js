const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8080;
const Member = require("./models/schema");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

async function MongoConnect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/codearc");
  console.log("DataBase Connected :)");
}

MongoConnect().catch((err) =>
  console.log("Error While Connecting DataBase: ", err)
);

app.get("/", async (req, res) => {
  const MemberInfo = await Member.find({});
  res.render("index", { MemberInfo });
});

app.listen(port, () => console.log("Server Started"));
