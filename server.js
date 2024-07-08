require("dotenv").config();

const https = require("https");
const fs = require("fs");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3031;
const app = express();

const httpsSever = https.createServer(
  {
    key: fs.readFileSync("keys/key.pem", "utf8"),
    cert: fs.readFileSync("keys/cert.pem", "utf8"),
  },
  app
);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API ..." });
});

httpsSever.listen(PORT, () => {
  console.log(`Server running ... PORT: ${PORT}`);
});
