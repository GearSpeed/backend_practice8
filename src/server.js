const express = require("express");

const kodersRoute = require("./routes/koders.routes");
const mentorsRoute = require("./routes/mentors.routes");

const app = express();

//middleware
app.use(express.json());

app.use("/koders", kodersRoute);
app.use("/mentors", mentorsRoute);

app.get("/", (request, response) => {
  response.json({
    message: "Koders/Mentors APIv1",
  });
});

module.exports = app;
