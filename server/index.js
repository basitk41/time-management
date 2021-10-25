const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const data = require("./routes/data");
const auth = require("./routes/auth");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/data", data);
app.use("/api/v1/auth", auth);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
