const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())

dotenv.config({ path: "./config.env" });

require("./db/conn")
app.use(express.json()) 
// {to stringify the json directly if data entered in json}
// const User = require("./model/userSchema");

// we link the router files to make our route easy
app.use(require('./router/auth'))

// app.get("/", (req, res) => {
//   res.send(`Hello world from  server`);
// });

app.listen(3001, () => {
  console.log(`Server is running on 3001`);
});
