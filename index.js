require("dotenv").config();

const server = require("./src/server");
const db = require("./src/lib/db");
//si al importar el valor está vacio entonces se asigna el segundo valor
const PORT = process.env.PORT || 8080;

db.connect()
  .then(() => {
    console.log("DB connected");

    server.listen(PORT, () => {
      console.log("Server is running on port:", PORT);
    });
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });
