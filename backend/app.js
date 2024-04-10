const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());

app.listen(3001, () => {
    console.log("서버에 연결되었습니다.")
  })

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("connected to DB"))
.catch((err) => console.log(err));


module.exports = app;