const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

app.use(bodyParser.json());
app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
