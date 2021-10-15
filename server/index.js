const express = require("express");
const cors = require("cors");
const data = require("./routes/data");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/data", data);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
