require("dotenv").config();
const { server, app } = require("./src/app");
const mongooseDB = require("./src/db/db");

const PORT = process.env.PORT || 3001;

const main = async () => {
  try {
    await mongooseDB();
    console.log("BD conectada correctamente");
    server.listen(PORT, () => {
      console.log(`Servidor levantado en el puerto ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
main();
