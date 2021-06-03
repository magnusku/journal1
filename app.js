const dotenv = require("dotenv");
const express = require("express");
const fileUpload = require("express-fileupload");
const router = require("./routes")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(fileUpload());
app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));