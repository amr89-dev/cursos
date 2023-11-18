require("dotenv").config();
const createServer = require("./src/app");
const { sequelize } = require("./src/db/db.js");
const loadCategories = require("./src/db/seed/loadCategories");
const loadProducts = require("./src/db/seed/loadProducts");

const PORT = process.env.PORT || "3001";

const main = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("La conexion a la base de datos es exitosa");
    await loadCategories();
    await loadProducts();
    const server = await createServer();
    server.listen(PORT, () => {
      console.log(`Servidor levantado en el puerto ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
