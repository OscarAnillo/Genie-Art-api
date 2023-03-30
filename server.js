require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./routes/api");

const PORT = process.env.PORT;

//Enable all request
app.use(cors());

//Json parser
app.use(express.json());

//Parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/openai", routes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
